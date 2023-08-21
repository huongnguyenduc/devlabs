import { prisma } from '@/lib/database/prisma';

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prisma.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return paidOrders.reduce((acc, order) => {
    const orderTotal = order.orderItems.reduce((acc, orderItem) => {
      return acc + orderItem.product.price.toNumber();
    }, 0);

    return acc + orderTotal;
  }, 0);
};
