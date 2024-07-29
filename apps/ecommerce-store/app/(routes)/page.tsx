import { Container } from '@/components/ui/container';
import { Billboard } from '@/components/billboard';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';
import { ProductList } from '@/components/product-list';

export const revalidate = 0;

export default async function HomePage() {
  const [products, billboard] = await Promise.all([
    getProducts({ isFeatured: true }),
    getBillboard(process.env.NEXT_PUBLIC_HOMEPAGE_BILLBOARD_ID || ''),
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
