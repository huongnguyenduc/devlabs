'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Heading } from '@/components/ui/heading/heading';
import { Separator } from '@devlabs/ui/src/core/separator';
import { useParams } from 'next/navigation';
import { useOrigin } from '@/hooks/use-origin';
import { ApiAlert } from '@/components/ui/api-copy/api-copy';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ApiList
 * ------------------------------------------------------------------------------------------------------------------ */

const apiListVariants = cva('');

type ApiListVariantProps = VariantProps<typeof apiListVariants> & {
  title: string;
  subtitle: string;
  entityName: string;
  entityIdName: string;
};

export type ApiListProps = ApiListVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ApiListVariantProps>;

export const ApiList: FC<ApiListProps> = ({
  className,
  title,
  subtitle,
  entityName,
  entityIdName,
  ...props
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <div {...props} className={apiListVariants({ className })}>
      <Heading subtitle={subtitle} title={title} />
      <Separator />
      <div className="space-y-4">
        <ApiAlert
          description={`${baseUrl}/${entityName}`}
          title="GET"
          variant="public"
        />
        <ApiAlert
          description={`${baseUrl}/${entityName}/(${entityIdName})`}
          title="GET"
          variant="public"
        />
        <ApiAlert
          description={`${baseUrl}/${entityName}`}
          title="POST"
          variant="admin"
        />
        <ApiAlert
          description={`${baseUrl}/${entityName}/(${entityIdName})`}
          title="PATCH"
          variant="admin"
        />
        <ApiAlert
          description={`${baseUrl}/${entityName}/(${entityIdName})`}
          title="DELETE"
          variant="admin"
        />
      </div>
    </div>
  );
};
