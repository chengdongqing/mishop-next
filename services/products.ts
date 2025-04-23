'use server';

import { ProductOrderBy } from '@/enums/product';
import { db } from '@/lib/db';
import {
  productCategories,
  productLabelRelations,
  productLabels,
  productReviews,
  products,
  productSkus
} from '@/lib/schema';
import { createPaginationMeta } from '@/lib/utils';
import { Page, PageRequest } from '@/types/common';
import {
  DetailProduct,
  RecommendedProduct,
  SearchProduct
} from '@/types/product';
import { and, desc, eq, gt, like, SQL, sql } from 'drizzle-orm';
import { pick } from 'next/dist/lib/pick';
import { cache } from 'react';

interface SearchRequest extends PageRequest {
  keyword: string;
  categoryId: number;
  labelId: number;
  orderBy: ProductOrderBy;
  onlyAvailable: boolean;
}

export async function searchProducts(
  request: Partial<SearchRequest> = {}
): Promise<Page<SearchProduct>> {
  // 构建查询条件
  const conditions = getSearchConditions(request);

  // 查询总数量
  const totalQuery = await db
    .select({
      id: products.id
    })
    .from(products)
    .leftJoin(productSkus, eq(products.id, productSkus.productId))
    .leftJoin(
      productLabelRelations,
      eq(products.id, productLabelRelations.productId)
    )
    .where(conditions)
    .groupBy(products.id);
  const total = totalQuery.length;

  // 计算分页参数
  const { page, size, offset, pages } = createPaginationMeta(request, total);

  // 获取排序方式
  const orderBy = getOrderBy(request.orderBy);

  // 查询商品数据
  const list = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      price: products.price,
      originalPrice: products.originalPrice,
      pictureUrl: products.pictureUrl,
      pictureUrls: sql<string>`group_concat(distinct ${productSkus.pictureUrl})`
    })
    .from(products)
    .leftJoin(productSkus, eq(products.id, productSkus.productId))
    .leftJoin(
      productLabelRelations,
      eq(products.id, productLabelRelations.productId)
    )
    .where(conditions)
    .groupBy(products.id)
    .orderBy(orderBy)
    .limit(size)
    .offset(offset);

  return {
    total,
    page,
    size,
    pages,
    data: list.map((product) => ({
      ...pick(product, [
        'id',
        'name',
        'slug',
        'pictureUrl',
        'price',
        'originalPrice'
      ]),
      pictureUrls: product.pictureUrls
        ? product.pictureUrls.split(',')
        : [product.pictureUrl]
    }))
  };
}

function getSearchConditions(request: Partial<SearchRequest>) {
  const filters: SQL[] = [];

  filters.push(eq(products.enabled, true));
  if (request.categoryId) {
    filters.push(sql`
        ${products.categoryId} in (
          select id from ${productCategories} 
          where ${productCategories.id} = ${request.categoryId} 
          or ${productCategories.parentId} = ${request.categoryId}
        )
      `);
  }
  if (request.labelId) {
    filters.push(eq(productLabelRelations.labelId, request.labelId));
  }
  if (request.keyword) {
    filters.push(like(products.name, `%${request.keyword}%`));
  }
  if (request.onlyAvailable) {
    filters.push(gt(productSkus.stocks, 0));
  }

  return and(...filters);
}

function getOrderBy(orderBy?: ProductOrderBy) {
  switch (orderBy) {
    case ProductOrderBy.PRICE_ASC:
      return products.price;
    case ProductOrderBy.PRICE_DESC:
      return desc(products.price);
    case ProductOrderBy.SELLING:
      return desc(products.sales);
    case ProductOrderBy.RATING:
      return desc(products.rating);
    case ProductOrderBy.NEWEST:
    default:
      return desc(products.createdAt);
  }
}

export async function findProductCategories(parentId: number = 0) {
  return db
    .select({
      id: productCategories.id,
      name: productCategories.name
    })
    .from(productCategories)
    .where(eq(productCategories.parentId, parentId));
}

export async function findProductLabels(categoryId: number) {
  return db
    .select({
      id: productLabels.id,
      name: productLabels.name
    })
    .from(productLabels)
    .where(eq(productLabels.categoryId, categoryId));
}

export async function findHotProductNames(limits = 10) {
  const res = await db
    .select({ name: products.name })
    .from(products)
    .where(eq(products.enabled, true))
    .orderBy(desc(products.sales), sql`rand()`)
    .limit(limits);

  return res.map((product) => product.name);
}

export async function findRecommendedProducts(
  limits: number = 10
): Promise<RecommendedProduct[]> {
  return db
    .select({
      productId: products.id,
      productSlug: products.slug,
      productName: products.name,
      fullName: sql<string>`concat_ws(' ', ${products.name}, ${productSkus.name})`,
      skuId: productSkus.id,
      skuName: productSkus.name,
      pictureUrl: productSkus.pictureUrl,
      price: productSkus.price,
      limits: productSkus.limits,
      reviews: sql<number>`(select count(*) 
            from ${productReviews} 
            where ${productReviews.productId} = ${products.id} 
              and ${productReviews.rating} >= 3)`
    })
    .from(products)
    .innerJoin(productSkus, eq(products.id, productSkus.productId))
    .where(and(eq(products.enabled, true), gt(productSkus.stocks, 0)))
    .groupBy(productSkus.id)
    .orderBy(sql`rand()`)
    .limit(limits);
}

export const findProductDetails = cache(
  async (idOrSlug: string): Promise<DetailProduct | null> => {
    const filters: SQL[] = [];
    if (isNumericId(idOrSlug)) {
      filters.push(eq(products.id, Number(idOrSlug)));
    } else {
      filters.push(eq(products.slug, idOrSlug));
    }
    filters.push(eq(products.enabled, true));

    const res = await db.query.products.findFirst({
      where: (_, { and }) => and(...filters),
      with: {
        skus: true
      }
    });

    if (!res) {
      return null;
    }

    return pick(res, [
      'id',
      'name',
      'slug',
      'description',
      'staticDetails',
      'skus'
    ]);
  }
);

function isNumericId(value: string) {
  return /^\d+$/.test(value);
}
