import { prisma } from '@/lib/database/prisma';
import { ColorForm } from './components/color-form';

export default async function ColorsPage({
  params,
}: {
  params: { storeId: string; colorId: string };
}) {
  const color = await prisma.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
}
