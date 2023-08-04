import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Alert
 * -------------------------------------------------------------------------- */

export const alertVariants = cva(
  [
    'relative w-full rounded-lg border p-4',
    '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    '[&>svg+div]:translate-y-[-3px]',
    '[&:has(svg)]:pl-11',
  ],
  {
    variants: {
      variant: {
        default: ['bg-background text-foreground', '[&>svg]:text-foreground'],
        destructive: [
          'border-destructive/50 text-destructive dark:border-destructive',
          '[&>svg]:text-destructive',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(alertVariants({ className, variant }))}
      {...props}
    />
  ),
);

Alert.displayName = 'Alert';

/* -----------------------------------------------------------------------------
 * Component: AlertTitle
 * -------------------------------------------------------------------------- */

export const alertTitleVariants = cva(
  'mb-1 font-medium leading-none tracking-tight',
);

export type AlertTitleProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertTitleVariants>;

export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>(
  ({ className, ...props }, forwardedRef) => (
    <h5
      ref={forwardedRef}
      className={twMerge(alertTitleVariants({ className }))}
      {...props}
    />
  ),
);

AlertTitle.displayName = 'AlertTitle';

/* -----------------------------------------------------------------------------
 * Component: AlertDescription
 * -------------------------------------------------------------------------- */

export const alertDescriptionVariants = cva('text-sm [&_p]:leading-relaxed');

export type AlertDescriptionProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertDescriptionVariants>;

export const AlertDescription = forwardRef<
  HTMLDivElement,
  AlertDescriptionProps
>(({ className, ...props }, forwardedRef) => (
  <div
    ref={forwardedRef}
    className={twMerge(alertDescriptionVariants({ className }))}
    {...props}
  />
));

AlertDescription.displayName = 'AlertDescription';
