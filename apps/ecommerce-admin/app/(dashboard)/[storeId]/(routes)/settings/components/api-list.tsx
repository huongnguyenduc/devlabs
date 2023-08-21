'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { useOrigin } from '@/hooks/use-origin';
import { ApiAlert } from '@/components/ui/api-copy/api-copy';
import { useParams } from 'next/navigation';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ApiList
 * ------------------------------------------------------------------------------------------------------------------ */

const apiListVariants = cva('');

type ApiListVariantProps = VariantProps<typeof apiListVariants>;

export type ApiListProps = ApiListVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ApiListVariantProps>;

export const ApiList: FC<ApiListProps> = ({ className, ...props }) => {
  const params = useParams();
  const origin = useOrigin();

  return (
    <div {...props} className={apiListVariants({ className })}>
      <ApiAlert
        description={`${origin}/api/${params.storeId}`}
        title="NEXT_PUBLIC_API_URL"
        variant="public"
      />
    </div>
  );
};
