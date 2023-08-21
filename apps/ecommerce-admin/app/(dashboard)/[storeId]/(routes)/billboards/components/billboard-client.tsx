'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Button } from '@devlabs/ui/src/core/button';
import { PlusIcon } from 'lucide-react';
import { Separator } from '@devlabs/ui/src/core/separator';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { BillboardColumn, columns } from './columns';
import { DataTable } from '@devlabs/ui/src/data-table';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: BillboardClient
 * ------------------------------------------------------------------------------------------------------------------ */

const billboardClientVariants = cva('');

type BillboardClientVariantProps = VariantProps<
  typeof billboardClientVariants
> & {
  data: BillboardColumn[];
};

export type BillboardClientProps = BillboardClientVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof BillboardClientVariantProps>;

export const BillboardClient: FC<BillboardClientProps> = ({
  className,
  data,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div {...props} className={billboardClientVariants({ className })}>
      <div className="flex items-center justify-between">
        <Heading
          subtitle="Manage billboards for your store"
          title={`Billboards (${data.length})`}
        />
        <Button
          startIcon={PlusIcon}
          variant="primary"
          onClick={() =>
            router.push(page.store.billboards(params.storeId as string, '/new'))
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
