import { MeiliSearch } from 'meilisearch';

export const meiliClient = new MeiliSearch({
  host: process.env.MEILI_HOST!
});

export const productIndex = meiliClient.index('products');
