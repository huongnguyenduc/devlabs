import { Indicator, Root } from '@radix-ui/react-checkbox';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Checkbox
 * -------------------------------------------------------------------------- */

export const checkboxVariants = cva([
  'border-primary peer flex h-4 w-4 shrink-0 items-center justify-center rounded border',
  'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'data-state-checked:bg-primary data-state-checked:text-primary-foreground',
  'data-state-indeterminate:bg-primary data-state-indeterminate:text-primary-foreground',
]);

export type CheckboxProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof checkboxVariants>;

export const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(checkboxVariants({ className }))}
      {...props}
    />
  ),
);

Checkbox.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: CheckboxIndicator
 * -------------------------------------------------------------------------- */

export const checkboxIndicatorVariants = cva(
  'flex items-center justify-center fill-current text-current',
);

export type CheckboxIndicatorProps = ComponentPropsWithoutRef<
  typeof Indicator
> &
  VariantProps<typeof checkboxIndicatorVariants>;

export const CheckboxIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  CheckboxIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <Indicator
    ref={forwardedRef}
    className={twMerge(checkboxIndicatorVariants({ className }))}
    {...props}
  />
));

CheckboxIndicator.displayName = Indicator.displayName;
