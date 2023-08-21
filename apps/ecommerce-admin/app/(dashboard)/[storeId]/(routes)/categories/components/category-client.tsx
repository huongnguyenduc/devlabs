'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Button } from '@devlabs/ui/src/core/button';
import { PlusIcon } from 'lucide-react';
import { Separator } from '@devlabs/ui/src/core/separator';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { CategoryColumn, columns } from './columns';
import { DataTable } from '@devlabs/ui/src/data-table';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: CategoryClient
 * ------------------------------------------------------------------------------------------------------------------ */

const categoryClientVariants = cva('');

type CategoryClientVariantProps = VariantProps<
  typeof categoryClientVariants
> & {
  data: CategoryColumn[];
};

export type CategoryClientProps = CategoryClientVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CategoryClientVariantProps>;

export const CategoryClient: FC<CategoryClientProps> = ({
  className,
  data,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div {...props} className={categoryClientVariants({ className })}>
      <div className="flex items-center justify-between">
        <Heading
          subtitle="Manage categories for your store"
          title={`Categories (${data.length})`}
        />
        <Button
          startIcon={PlusIcon}
          variant="primary"
          onClick={() =>
            router.push(page.store.categories(params.storeId as string, '/new'))
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
