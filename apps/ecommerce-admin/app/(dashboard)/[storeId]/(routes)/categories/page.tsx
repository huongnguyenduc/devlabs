import { prisma } from '@/lib/database/prisma';
import { CategoryColumn } from './components/columns';
import { formatDatetime } from '@devlabs/utils/src/time';
import { ApiList } from '@/components/ui/api-copy/api-list';
import { CategoryClient } from '@/app/(dashboard)/[storeId]/(routes)/categories/components/category-client';

export default async function CategoriesPage({
  params,
}: {
  params: { storeId: string };
}) {
  const categories = await prisma.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: formatDatetime(category.createdAt.toISOString()),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
        <ApiList
          entityIdName="categoryId"
          entityName="categories"
          subtitle="API calls for Categories"
          title="API"
        />
      </div>
    </div>
  );
}
