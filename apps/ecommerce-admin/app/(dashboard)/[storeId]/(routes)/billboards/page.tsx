import { BillboardClient } from './components/billboard-client';
import { prisma } from '@/lib/database/prisma';
import { BillboardColumn } from './components/columns';
import { formatDatetime } from '@devlabs/utils/src/time';
import { ApiList } from '@/components/ui/api-copy/api-list';

export default async function BillboardsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map(
    (billboard) => ({
      id: billboard.id,
      label: billboard.label,
      createdAt: formatDatetime(billboard.createdAt.toISOString()),
    }),
  );

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
        <ApiList
          entityIdName="billboardId"
          entityName="billboards"
          subtitle="API calls for Billboards"
          title="API"
        />
      </div>
    </div>
  );
}
