import { Item, Root } from '@radix-ui/react-toggle-group';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: ToggleGroup
 * -------------------------------------------------------------------------- */

export const toggleGroupVariants = cva(
  'bg-primary-foreground inline-flex space-x-px rounded-md',
);

export type ToggleGroupProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof toggleGroupVariants>;

export const ToggleGroup = forwardRef<
  ElementRef<typeof Root>,
  ToggleGroupProps
>(({ className, ...props }, forwardedRef) => (
  <Root
    ref={forwardedRef}
    className={twMerge(toggleGroupVariants({ className }))}
    {...props}
  />
));

ToggleGroup.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToggleGroupItem
 * -------------------------------------------------------------------------- */

export const toggleGroupItemVariants = cva(
  [
    'inline-flex items-center justify-center text-sm font-medium transition-colors',
    'first:rounded-l-md last:rounded-r-md',
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
        md: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ToggleGroupItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof toggleGroupItemVariants>;

export const ToggleGroupItem = forwardRef<
  ElementRef<typeof Item>,
  ToggleGroupItemProps
>(({ className, variant = 'primary', size = 'md', ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={twMerge(toggleGroupItemVariants({ className, variant, size }))}
    {...props}
  />
));

ToggleGroupItem.displayName = Item.displayName;
