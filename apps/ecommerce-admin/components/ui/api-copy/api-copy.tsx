'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@devlabs/ui/src/alert';
import { Copy, Server } from 'lucide-react';
import { Badge, BadgeProps } from '@devlabs/ui/src/core/badge';
import { Button } from '@devlabs/ui/src/core/button';
import { toast } from '@devlabs/ui/src/use-toast';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ApiAlert
 * ------------------------------------------------------------------------------------------------------------------ */

const apiAlertVariants = cva('');

type ApiAlertVariantProps = VariantProps<typeof apiAlertVariants> & {
  title: string;
  description: string;
  variant: 'admin' | 'public';
};

const textMap: Record<ApiAlertVariantProps['variant'], string> = {
  public: 'Public',
  admin: 'Admin',
};

const variantMap: Record<
  ApiAlertVariantProps['variant'],
  BadgeProps['variant']
> = {
  public: 'secondary',
  admin: 'destructive',
};

export type ApiAlertProps = ApiAlertVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ApiAlertVariantProps>;

export const ApiAlert: FC<ApiAlertProps> = ({
  className,
  title,
  description,
  variant,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const onCopy = async () => {
    setLoading(true);
    await navigator.clipboard.writeText(description);
    toast({
      title: 'Copied to clipboard',
      variant: 'success',
      description: 'API route copied to clipboard',
    });
    setLoading(false);
  };

  return (
    <Alert {...props} className={apiAlertVariants({ className })}>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ">
          {description}
        </code>
        <Button
          loading={loading}
          size="sm"
          startIcon={Copy}
          variant="outline"
          onClick={onCopy}
        />
      </AlertDescription>
    </Alert>
  );
};
