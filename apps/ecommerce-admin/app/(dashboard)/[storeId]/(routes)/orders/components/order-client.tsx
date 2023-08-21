'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Separator } from '@devlabs/ui/src/core/separator';
import { columns, OrderColumn } from './columns';
import { DataTable } from '@devlabs/ui/src/data-table';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: OrderClient
 * ------------------------------------------------------------------------------------------------------------------ */

const orderClientVariants = cva('');

type OrderClientVariantProps = VariantProps<typeof orderClientVariants> & {
  data: OrderColumn[];
};

export type OrderClientProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof OrderClientVariantProps
> &
  OrderClientVariantProps;

export const OrderClient: FC<OrderClientProps> = ({
  className,
  data,
  ...props
}) => {
  return (
    <div {...props} className={orderClientVariants({ className })}>
      <Heading
        subtitle="Manage orders for your store"
        title={`Orders (${data.length})`}
      />

      <Separator />

      <DataTable columns={columns} data={data} />
    </div>
  );
};
