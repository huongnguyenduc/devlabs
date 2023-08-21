import { prisma } from '@/lib/database/prisma';
import { SizeForm } from './components/size-form';

export default async function SizesPage({
  params,
}: {
  params: { storeId: string; sizeId: string };
}) {
  const size = await prisma.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}
