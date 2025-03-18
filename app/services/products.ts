import { ProductOrderBy } from '@/app/enums';
import { db } from '@/app/lib/db';
import { products } from '@/app/lib/schema';
import { and, desc, eq, like } from 'drizzle-orm';

interface FindProductsRequest {
  keyword: string;
  categoryId: number;
  orderBy: ProductOrderBy;
  page: number;
  limit: number;
}

export function findProducts(request: Partial<FindProductsRequest> = {}) {
  const orderBy = function getOrderBy() {
    switch (request.orderBy) {
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
  };

  return db
    .select()
    .from(products)
    .where(
      and(
        request.categoryId
          ? eq(products.categoryId, request.categoryId)
          : undefined,
        request.keyword
          ? like(products.name, `%${request.keyword}%`)
          : undefined
      )
    )
    .orderBy(orderBy)
    .limit(request.limit ?? -1)
    .offset(
      request.page && request.limit ? (request.page - 1) * request.limit : 0
    );
}
