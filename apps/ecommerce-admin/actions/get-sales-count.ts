import { prisma } from '@/lib/database/prisma';

export const getSalesCount = async (storeId: string) => {
  return await prisma.order.count({
    where: {
      storeId,
      isPaid: true,
    },
  });
};
