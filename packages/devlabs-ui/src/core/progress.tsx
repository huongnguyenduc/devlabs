import { Indicator, Root } from '@radix-ui/react-progress';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Progress
 * -------------------------------------------------------------------------- */

export const progressVariants = cva(
  'bg-secondary relative h-4 overflow-hidden rounded-full',
);

export type ProgressProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof progressVariants>;

export const Progress = forwardRef<ElementRef<typeof Root>, ProgressProps>(
  ({ className, style, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(progressVariants({ className }))}
      style={{ ...style, transform: 'translateZ(0)' }}
      {...props}
    />
  ),
);

Progress.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: ProgressIndicator
 * -------------------------------------------------------------------------- */

export const progressIndicatorVariants = cva(
  'ease-[cubic-bezier(0.65, 0, 0.35, 1)] bg-primary h-full w-full transition-transform duration-500',
);

export type ProgressIndicatorProps = ComponentPropsWithoutRef<
  typeof Indicator
> &
  VariantProps<typeof progressIndicatorVariants>;

export const ProgressIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  ProgressIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <Indicator
    ref={forwardedRef}
    className={twMerge(progressIndicatorVariants({ className }))}
    {...props}
  />
));

ProgressIndicator.displayName = Indicator.displayName;
