import { Root } from '@radix-ui/react-label';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Label
 * -------------------------------------------------------------------------- */

export const labelVariants = cva(
  [
    'font-medium',
    'peer-invalid:text-destructive peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  ],
  {
    variants: {
      invalid: {
        true: 'text-destructive',
      },
    },
    defaultVariants: {
      invalid: false,
    },
  },
);

export type LabelProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof labelVariants>;

export const Label = forwardRef<ElementRef<typeof Root>, LabelProps>(
  ({ className, invalid = false, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(labelVariants({ className, invalid }))}
      {...props}
    />
  ),
);

Label.displayName = Root.displayName;
