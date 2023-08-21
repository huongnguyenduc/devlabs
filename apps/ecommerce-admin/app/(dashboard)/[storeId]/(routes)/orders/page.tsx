import { OrderClient } from './components/order-client';
import { prisma } from '@/lib/database/prisma';
import { OrderColumn } from './components/columns';
import { formatDatetime } from '@devlabs/utils/src/time';
import { ApiList } from '@/components/ui/api-copy/api-list';
import { formatCurrency } from '@devlabs/utils/src/number';

export default async function OrdersPage({
  params,
}: {
  params: { storeId: string };
}) {
  const orders = await prisma.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    products: order.orderItems.map((item) => item.product.name).join(', '),
    totalPrice: formatCurrency(
      order.orderItems.reduce(
        (total, item) => total + Number(item.product.price),
        0,
      ),
    ),
    createdAt: formatDatetime(order.createdAt.toISOString()),
    isPaid: order.isPaid,
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <OrderClient data={formattedOrders} />
        <ApiList
          entityIdName="orderId"
          entityName="orders"
          subtitle="API calls for Orders"
          title="API"
        />
      </div>
    </div>
  );
}
