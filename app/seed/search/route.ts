import { productIndex } from '@/app/lib/meili';
import { productsData } from '@/app/lib/placeholder-data';

export async function GET() {
  try {
    await productIndex.addDocuments(productsData);

    await productIndex.updateSearchableAttributes([
      'name',
      'tags',
      'description'
    ]);

    // await productIndex.updateFilterableAttributes(['category', 'price']);

    // await productIndex.updateSortableAttributes(['price']);
    return Response.json({ message: 'meilisearch seeded successfully' });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}
