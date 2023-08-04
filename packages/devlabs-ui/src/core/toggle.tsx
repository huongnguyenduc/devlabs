import { Root } from '@radix-ui/react-toggle';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Toggle
 * -------------------------------------------------------------------------- */

export const toggleVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
    'hover:bg-muted hover:text-muted-foreground',
    'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
    'data-state-on:bg-accent data-state-on:text-accent-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-transparent',
        outline: [
          'border-input border bg-transparent',
          'hover:bg-accent hover:text-accent-foreground',
        ],
      },
      size: {
        sm: 'h-9 px-2.5',
        md: 'h-10 px-3',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ToggleProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof toggleVariants>;

export const Toggle = forwardRef<ElementRef<typeof Root>, ToggleProps>(
  ({ className, variant, size, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(toggleVariants({ className, variant, size }))}
      {...props}
    />
  ),
);

Toggle.displayName = Root.displayName;
