import { ProductClient } from './components/product-client';
import { prisma } from '@/lib/database/prisma';
import { ProductColumn } from './components/columns';
import { formatDatetime } from '@devlabs/utils/src/time';
import { ApiList } from '@/components/ui/api-copy/api-list';
import { formatCurrency } from '@devlabs/utils/src/number';

export default async function ProductsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const products = await prisma.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedProducts: ProductColumn[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    isFeatured: product.isFeatured,
    isArchived: product.isArchived,
    price: formatCurrency(product.price.toNumber()),
    category: product.category.name,
    color: product.color.value,
    size: product.size.value,
    createdAt: formatDatetime(product.createdAt.toISOString()),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <ProductClient data={formattedProducts} />
        <ApiList
          entityIdName="productId"
          entityName="products"
          subtitle="API calls for Products"
          title="API"
        />
      </div>
    </div>
  );
}
