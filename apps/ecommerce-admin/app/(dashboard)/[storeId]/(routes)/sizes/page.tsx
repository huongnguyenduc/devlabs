import { SizeClient } from './components/size-client';
import { prisma } from '@/lib/database/prisma';
import { SizeColumn } from './components/columns';
import { formatDatetime } from '@devlabs/utils/src/time';
import { ApiList } from '@/components/ui/api-copy/api-list';

export default async function SizesPage({
  params,
}: {
  params: { storeId: string };
}) {
  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: formatDatetime(size.createdAt.toISOString()),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <SizeClient data={formattedSizes} />
        <ApiList
          entityIdName="sizeId"
          entityName="sizes"
          subtitle="API calls for Sizes"
          title="API"
        />
      </div>
    </div>
  );
}
