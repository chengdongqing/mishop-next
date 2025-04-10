import { ProductOrderBy } from '@/app/enums';
import { db } from '@/app/lib/db';
import {
  productCategories,
  productLabelRelations,
  productLabels,
  products,
  productSkus
} from '@/app/lib/schema';
import { createPaginationMeta } from '@/app/lib/utils';
import { Page, PageRequest } from '@/app/types/common';
import { DetailProduct, SearchProduct } from '@/app/types/product';
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
      id: product.id,
      name: product.name,
      slug: product.slug,
      pictureUrl: product.pictureUrl,
      price: Number(product.price),
      originalPrice: Number(product.originalPrice ?? product.price),
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

export function findProductCategories(parentId: number = 0) {
  return db
    .select({
      id: productCategories.id,
      name: productCategories.name
    })
    .from(productCategories)
    .where(eq(productCategories.parentId, parentId));
}

export function findProductLabels(categoryId: number) {
  return db
    .select({
      id: productLabels.id,
      name: productLabels.name
    })
    .from(productLabels)
    .where(eq(productLabels.categoryId, categoryId));
}

export async function findRecommendedProducts(limits: number = 10) {
  const [res] = await db.execute(sql<
    {
      id: number;
      name: string;
      pictureUrl: string;
      skuId: number;
      skuName: string;
      price: number;
      limits: number;
      reviews: number;
    }[]
  >`
      select any_value(p.id)      as id,
             any_value(p.name)    as name,
             ps.picture_url       as pictureUrl,
             any_value(ps.id)     as skuId,
             any_value(ps.name)   as skuName,
             any_value(ps.price)  as price,
             any_value(ps.limits) as limits,
             (select count(*)
              from mishop.product_reviews
              where product_id = any_value(p.id)
                and rating >= 3)  as reviews
      from mishop.products p
               inner join mishop.product_skus ps on p.id = ps.product_id
      where p.enabled = true
        and ps.stocks > 0
      group by ps.picture_url
      order by rand()
      limit ${limits}
  `);

  return res;
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

    const product = pick(res, [
      'id',
      'name',
      'slug',
      'description',
      'staticDetails',
      'skus'
    ]);

    return {
      ...product,
      skus: product.skus?.map((sku) => ({
        ...sku,
        price: Number(sku.price),
        originalPrice: Number(sku.originalPrice ?? sku.price)
      }))
    };
  }
);

export async function findAllProducts() {
  return await db.query.products.findMany({
    columns: { id: true, slug: true }
  });
}

function isNumericId(value: string) {
  return /^\d+$/.test(value);
}
