import { Root, Thumb } from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Switch
 * -------------------------------------------------------------------------- */

export const switchVariants = cva([
  'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
  'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
  'data-state-unchecked:bg-input',
  'data-state-checked:bg-primary',
  'disabled:cursor-not-allowed disabled:opacity-50',
]);

export type SwitchProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof switchVariants>;

export const Switch = forwardRef<ElementRef<typeof Root>, SwitchProps>(
  ({ className, style, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(switchVariants({ className }))}
      style={{
        ...style,
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
      {...props}
    />
  ),
);

Switch.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: SwitchThumb
 * -------------------------------------------------------------------------- */

export const switchThumbVariants = cva([
  'bg-background pointer-events-none block h-5 w-5 rounded-full shadow-lg transition-transform',
  'data-state-checked:translate-x-5',
  'data-state-unchecked:translate-x-0',
]);

export type SwitchThumbProps = ComponentPropsWithoutRef<typeof Thumb> &
  VariantProps<typeof switchThumbVariants>;

export const SwitchThumb = forwardRef<
  ElementRef<typeof Thumb>,
  SwitchThumbProps
>(({ className, ...props }, forwardedRef) => (
  <Thumb
    ref={forwardedRef}
    className={twMerge(switchThumbVariants({ className }))}
    {...props}
  />
));

SwitchThumb.displayName = Thumb.displayName;
