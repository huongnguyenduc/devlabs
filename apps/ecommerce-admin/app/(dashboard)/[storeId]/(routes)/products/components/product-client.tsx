'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Button } from '@devlabs/ui/src/core/button';
import { PlusIcon } from 'lucide-react';
import { Separator } from '@devlabs/ui/src/core/separator';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { columns, ProductColumn } from './columns';
import { DataTable } from '@devlabs/ui/src/data-table';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ProductClient
 * ------------------------------------------------------------------------------------------------------------------ */

const productClientVariants = cva('');

type ProductClientVariantProps = VariantProps<typeof productClientVariants> & {
  data: ProductColumn[];
};

export type ProductClientProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ProductClientVariantProps
> &
  ProductClientVariantProps;

export const ProductClient: FC<ProductClientProps> = ({
  className,
  data,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div {...props} className={productClientVariants({ className })}>
      <div className="flex items-center justify-between">
        <Heading
          subtitle="Manage products for your store"
          title={`Products (${data.length})`}
        />
        <Button
          startIcon={PlusIcon}
          variant="primary"
          onClick={() =>
            router.push(page.store.products(params.storeId as string, '/new'))
          }
        >
          Add new
        </Button>
      </div>

      <Separator />

      <DataTable columns={columns} data={data} />
    </div>
  );
};
