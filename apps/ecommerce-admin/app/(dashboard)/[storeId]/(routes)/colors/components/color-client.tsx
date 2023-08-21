'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Button } from '@devlabs/ui/src/core/button';
import { PlusIcon } from 'lucide-react';
import { Separator } from '@devlabs/ui/src/core/separator';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { ColorColumn, columns } from './columns';
import { DataTable } from '@devlabs/ui/src/data-table';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ColorClient
 * ------------------------------------------------------------------------------------------------------------------ */

const colorClientVariants = cva('');

type ColorClientVariantProps = VariantProps<typeof colorClientVariants> & {
  data: ColorColumn[];
};

export type ColorClientProps = ColorClientVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ColorClientVariantProps>;

export const ColorClient: FC<ColorClientProps> = ({
  className,
  data,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div {...props} className={colorClientVariants({ className })}>
      <div className="flex items-center justify-between">
        <Heading
          subtitle="Manage colors for your store"
          title={`Colors (${data.length})`}
        />
        <Button
          startIcon={PlusIcon}
          variant="primary"
          onClick={() =>
            router.push(page.store.colors(params.storeId as string, '/new'))
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
