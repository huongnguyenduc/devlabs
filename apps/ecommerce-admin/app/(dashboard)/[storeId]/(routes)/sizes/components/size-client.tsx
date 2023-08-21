'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Button } from '@devlabs/ui/src/core/button';
import { PlusIcon } from 'lucide-react';
import { Separator } from '@devlabs/ui/src/core/separator';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { columns, SizeColumn } from './columns';
import { DataTable } from '@devlabs/ui/src/data-table';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: SizeClient
 * ------------------------------------------------------------------------------------------------------------------ */

const sizeClientVariants = cva('');

type SizeClientVariantProps = VariantProps<typeof sizeClientVariants> & {
  data: SizeColumn[];
};

export type SizeClientProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof SizeClientVariantProps
> &
  SizeClientVariantProps;

export const SizeClient: FC<SizeClientProps> = ({
  className,
  data,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div {...props} className={sizeClientVariants({ className })}>
      <div className="flex items-center justify-between">
        <Heading
          subtitle="Manage sizes for your store"
          title={`Sizes (${data.length})`}
        />
        <Button
          startIcon={PlusIcon}
          variant="primary"
          onClick={() =>
            router.push(page.store.sizes(params.storeId as string, '/new'))
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
