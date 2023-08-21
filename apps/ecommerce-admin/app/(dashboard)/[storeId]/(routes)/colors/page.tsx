import { ColorClient } from './components/color-client';
import { prisma } from '@/lib/database/prisma';
import { ColorColumn } from './components/columns';
import { formatDatetime } from '@devlabs/utils/src/time';
import { ApiList } from '@/components/ui/api-copy/api-list';

export default async function ColorsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const colors = await prisma.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedColors: ColorColumn[] = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: formatDatetime(color.createdAt.toISOString()),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <ColorClient data={formattedColors} />
        <ApiList
          entityIdName="colorId"
          entityName="colors"
          subtitle="API calls for Colors"
          title="API"
        />
      </div>
    </div>
  );
}
