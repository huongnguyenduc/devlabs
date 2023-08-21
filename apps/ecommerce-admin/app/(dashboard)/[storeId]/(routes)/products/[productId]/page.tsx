import { prisma } from '@/lib/database/prisma';
import { ProductForm } from './components/product-form';

export default async function ProductsPage({
  params,
}: {
  params: { storeId: string; productId: string };
}) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      category: true,
      images: true,
    },
  });

  const categories = await prisma.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prisma.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          colors={colors}
          initialData={product}
          sizes={sizes}
        />
      </div>
    </div>
  );
}
