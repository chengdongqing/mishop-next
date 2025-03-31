import { ProductOrderBy } from '@/app/enums';
import { db } from '@/app/lib/db';
import {
  productCategories,
  productLabels,
  products,
  productSkus
} from '@/app/lib/schema';
import { SearchProduct } from '@/app/types/product';
import { and, desc, eq, gt, like, sql } from 'drizzle-orm';

interface SearchRequest {
  keyword: string;
  categoryId: number;
  labelId: number;
  orderBy: ProductOrderBy;
  onlyAvailable: boolean;
  page: number;
  limit: number;
}

export async function searchProducts(
  request: Partial<SearchRequest> = {}
): Promise<SearchProduct[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const orderBy = getOrderBy(request.orderBy);

  const list = await db
    .select({
      id: products.id,
      name: products.name,
      price: products.price,
      originalPrice: products.originalPrice,
      pictureUrl: products.pictureUrl,
      pictureUrls: sql<string>`group_concat
          ( ${productSkus.pictureUrl})`
    })
    .from(products)
    .leftJoin(productSkus, eq(products.id, productSkus.productId))
    .where(
      and(
        request.categoryId
          ? eq(products.categoryId, request.categoryId)
          : undefined,
        request.keyword
          ? like(products.name, `%${request.keyword}%`)
          : undefined,
        request.onlyAvailable ? gt(productSkus.stocks, 0) : undefined
      )
    )
    .groupBy(products.id)
    .orderBy(orderBy)
    .limit(request.limit ?? -1)
    .offset(
      request.page && request.limit ? (request.page - 1) * request.limit : 0
    );

  return list.map((product) => ({
    id: product.id,
    name: product.name,
    pictureUrl: product.pictureUrl,
    price: Number(product.price),
    originalPrice: Number(product.originalPrice ?? product.price),
    pictureUrls: product.pictureUrls
      ? product.pictureUrls.split(',')
      : [product.pictureUrl]
  }));
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

export function findProductCategories() {
  return db
    .select({
      id: productCategories.id,
      name: productCategories.name
    })
    .from(productCategories)
    .where(eq(productCategories.parentId, 0));
}

export function findProductLabels() {
  return db
    .select({
      id: productLabels.id,
      name: productLabels.name
    })
    .from(productLabels);
}
