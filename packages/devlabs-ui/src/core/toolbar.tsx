import {
  Button,
  Link,
  Root,
  Separator,
  ToggleGroup,
  ToggleItem,
} from '@radix-ui/react-toolbar';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Toolbar
 * -------------------------------------------------------------------------- */

export const toolbarVariants = cva(
  'flex w-full min-w-max rounded-md border p-1',
);

export type ToolbarProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof toolbarVariants>;

export const Toolbar = forwardRef<ElementRef<typeof Root>, ToolbarProps>(
  ({ className, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(toolbarVariants({ className }))}
      {...props}
    />
  ),
);

Toolbar.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToolbarSeparator
 * -------------------------------------------------------------------------- */

export const toolbarSeparatorVariants = cva('bg-border mx-2.5 w-px');

export type ToolbarSeparatorProps = ComponentPropsWithoutRef<typeof Separator> &
  VariantProps<typeof toolbarSeparatorVariants>;

export const ToolbarSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ToolbarSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Separator
    ref={forwardedRef}
    className={twMerge(toolbarSeparatorVariants({ className }))}
    {...props}
  />
));

ToolbarSeparator.displayName = Separator.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToolbarButton
 * -------------------------------------------------------------------------- */

export const toolbarButtonVariants = cva([
  'bg-primary my-auto flex h-7 shrink-0 grow-0 basis-auto items-center justify-center rounded-md px-2.5 text-sm text-white outline-none',
  'hover:bg-primary/90',
  'focus:ring-ring/40 focus:relative focus:ring-2',
]);

export type ToolbarButtonProps = ComponentPropsWithoutRef<typeof Button> &
  VariantProps<typeof toolbarButtonVariants>;

export const ToolbarButton = forwardRef<
  ElementRef<typeof Button>,
  ToolbarButtonProps
>(({ className, ...props }, forwardedRef) => (
  <Button
    ref={forwardedRef}
    className={twMerge(toolbarButtonVariants({ className }))}
    {...props}
  />
));

ToolbarButton.displayName = Button.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToolbarLink
 * -------------------------------------------------------------------------- */

export const toolbarLinkVariants = cva([
  'px-1.25 text-muted-foreground my-auto flex h-7 shrink-0 grow-0 basis-auto items-center justify-center rounded-md bg-transparent text-sm',
  'hover:text-primary hover:cursor-pointer hover:bg-transparent',
  'focus:ring-ring/40 focus:relative focus:z-10 focus:outline-none focus:ring-2',
]);

export type ToolbarLinkProps = ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof toolbarLinkVariants>;

export const ToolbarLink = forwardRef<
  ElementRef<typeof Link>,
  ToolbarLinkProps
>(({ className, ...props }, forwardedRef) => (
  <Link
    ref={forwardedRef}
    className={twMerge(toolbarLinkVariants({ className }))}
    {...props}
  />
));

ToolbarLink.displayName = Link.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToolbarToggleGroup
 * -------------------------------------------------------------------------- */

export const toolbarToggleGroupVariants = cva([
  'flex items-center gap-0.5',
  'data-orientation-vertical:flex-col',
]);

export type ToolbarToggleGroupProps = ComponentPropsWithoutRef<
  typeof ToggleGroup
> &
  VariantProps<typeof toolbarToggleGroupVariants>;

export const ToolbarToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroup>,
  ToolbarToggleGroupProps
>(({ className, ...props }, forwardedRef) => (
  <ToggleGroup
    ref={forwardedRef}
    className={twMerge(toolbarToggleGroupVariants({ className }))}
    {...props}
  />
));

ToolbarToggleGroup.displayName = ToggleGroup.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToolbarToggleItem
 * -------------------------------------------------------------------------- */

export const toolbarToggleItemVariants = cva(
  [
    'inline-flex items-center justify-center rounded text-sm font-medium transition-colors',
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
        sm: 'px-1.75 h-7',
        md: 'px-2.25 h-8',
        lg: 'px-4.25 h-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
);

export type ToolbarToggleItemProps = ComponentPropsWithoutRef<
  typeof ToggleItem
> &
  VariantProps<typeof toolbarToggleItemVariants>;

export const ToolbarToggleItem = forwardRef<
  ElementRef<typeof ToggleItem>,
  ToolbarToggleItemProps
>(({ className, variant = 'primary', size = 'sm', ...props }, forwardedRef) => (
  <ToggleItem
    ref={forwardedRef}
    {...props}
    className={twMerge(toolbarToggleItemVariants({ className, variant, size }))}
  />
));

ToolbarToggleItem.displayName = ToggleItem.displayName;
