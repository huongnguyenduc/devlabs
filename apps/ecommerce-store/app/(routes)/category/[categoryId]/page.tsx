import { getProducts } from '@/actions/get-products';
import { getSizes } from '@/actions/get-sizes';
import { getColors } from '@/actions/get-colors';
import { getCategory } from '@/actions/get-category';
import { Container } from '@/components/ui/container';
import { Billboard } from '@/components/billboard';
import { Filter } from './components/filter';
import { ProductCard } from '@/components/ui/product-card';
import { NoResults } from '@/components/ui/no-results';
import { MobileFilters } from '@/app/(routes)/category/[categoryId]/components/mobile-filters';

export const revalidate = 0;
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
}) {
  const [products, sizes, colors, category] = await Promise.all([
    getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
    }),
    getSizes(),
    getColors(),
    getCategory(params.categoryId),
  ]);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden lg:block">
              <Filter data={sizes} name="Sizes" valueKey="sizeId" />
              <Filter data={colors} name="Colors" valueKey="colorId" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {!!products?.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
                </div>
              ) : (
                <NoResults />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
