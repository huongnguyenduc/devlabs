import { Container } from '@/components/ui/container';
import { Billboard } from '@/components/billboard';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';
import { ProductList } from '@/components/product-list';

export const revalidate = 0;

export default async function HomePage() {
  const [products, billboard] = await Promise.all([
    getProducts({ isFeatured: true }),
    getBillboard('8c6e6e28-3817-43ea-93db-cf6f254bec5e'),
  ]);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} title="Feature Products" />
        </div>
      </div>
    </Container>
  );
}
