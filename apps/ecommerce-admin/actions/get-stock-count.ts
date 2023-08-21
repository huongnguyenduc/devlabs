import { prisma } from '@/lib/database/prisma';

export const getStockCount = async (storeId: string) => {
  return await prisma.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });
};
