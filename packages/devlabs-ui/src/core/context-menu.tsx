import {
  Arrow,
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from '@radix-ui/react-context-menu';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  HTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: ContextMenu
 * -------------------------------------------------------------------------- */

export const ContextMenu = Root;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuTrigger
 * -------------------------------------------------------------------------- */

export const ContextMenuTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuPortal
 * -------------------------------------------------------------------------- */

export const ContextMenuPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuContent
 * -------------------------------------------------------------------------- */

export const contextMenuContentVariants = cva(
  'bg-popover text-popover-foreground relative z-10 min-w-[12rem] rounded-md border p-1 shadow-lg',
);

export type ContextMenuContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof contextMenuContentVariants>;

export const ContextMenuContent = forwardRef<
  ElementRef<typeof Content>,
  ContextMenuContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(contextMenuContentVariants({ className }))}
    {...props}
  />
));

ContextMenuContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuGroup
 * -------------------------------------------------------------------------- */

export const ContextMenuGroup = Group;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuLabel
 * -------------------------------------------------------------------------- */

export const contextMenuLabelVariants = cva(
  'text-foreground cursor-default px-2 py-1.5 text-sm font-semibold',
  {
    variants: {
      inset: {
        true: 'pl-8',
      },
    },
    defaultVariants: {
      inset: false,
    },
  },
);

export type ContextMenuLabelProps = ComponentPropsWithoutRef<typeof Label> &
  VariantProps<typeof contextMenuLabelVariants>;

export const ContextMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ContextMenuLabelProps
>(({ className, inset = false, ...props }, forwardedRef) => (
  <Label
    ref={forwardedRef}
    className={twMerge(contextMenuLabelVariants({ className, inset }))}
    {...props}
  />
));

ContextMenuLabel.displayName = Label.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuItem
 * -------------------------------------------------------------------------- */

export const contextMenuItemVariants = cva(
  [
    'group relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 text-sm outline-none',
    'data-disabled:opacity-50 data-disabled:pointer-events-none',
  ],
  {
    variants: {
      inset: {
        true: 'pl-8',
      },
      variant: {
        default: [
          'focus:bg-accent focus:text-accent-foreground',
          'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        ],
        destructive: [
          'text-destructive',
          'focus:bg-destructive-foreground focus:text-destructive',
          'data-highlighted:bg-destructive-foreground data-highlighted:text-destructive',
        ],
      },
    },
    defaultVariants: {
      inset: false,
      variant: 'default',
    },
  },
);

export type ContextMenuItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof contextMenuItemVariants>;

export const ContextMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ContextMenuItemProps
>(({ className, inset, variant, ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={twMerge(
      contextMenuItemVariants({
        className,
        inset,
        variant,
      }),
    )}
    {...props}
  />
));

ContextMenuItem.displayName = Item.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuCheckboxItem
 * -------------------------------------------------------------------------- */

export const contextMenuCheckboxItemVariants = cva(
  [
    'group relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 pl-8 text-sm outline-none',
    'data-disabled:opacity-50 data-disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        default: [
          'focus:bg-accent focus:text-accent-foreground',
          'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        ],
        destructive: [
          'text-destructive',
          'focus:bg-destructive-foreground focus:text-destructive',
          'data-highlighted:bg-destructive-foreground data-highlighted:text-destructive',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type ContextMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof CheckboxItem
> &
  VariantProps<typeof contextMenuCheckboxItemVariants>;

export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ className, variant, ...props }, forwardedRef) => (
  <CheckboxItem
    ref={forwardedRef}
    className={twMerge(
      contextMenuCheckboxItemVariants({
        className,
        variant,
      }),
    )}
    {...props}
  />
));

ContextMenuCheckboxItem.displayName = CheckboxItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuRadioGroup
 * -------------------------------------------------------------------------- */

export const ContextMenuRadioGroup = RadioGroup;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuRadioItem
 * -------------------------------------------------------------------------- */

export const contextMenuRadioItemVariants = cva(
  [
    'group relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 pl-8 text-sm outline-none',
    'data-disabled:opacity-50 data-disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        default: [
          'focus:bg-accent focus:text-accent-foreground',
          'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        ],
        destructive: [
          'text-destructive',
          'focus:bg-destructive-foreground focus:text-destructive',
          'data-highlighted:bg-destructive-foreground data-highlighted:text-destructive',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type ContextMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof RadioItem
> &
  VariantProps<typeof contextMenuRadioItemVariants>;

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ContextMenuRadioItemProps
>(({ className, variant, ...props }, forwardedRef) => (
  <RadioItem
    ref={forwardedRef}
    className={twMerge(contextMenuRadioItemVariants({ className, variant }))}
    {...props}
  />
));

ContextMenuRadioItem.displayName = RadioItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuItemIndicator
 * -------------------------------------------------------------------------- */

export const contextMenuItemIndicatorVariants = cva(
  'absolute left-0 inline-flex w-8 items-center justify-center',
);

export type ContextMenuItemIndicatorProps = ComponentPropsWithoutRef<
  typeof ItemIndicator
> &
  VariantProps<typeof contextMenuItemIndicatorVariants>;

export const ContextMenuItemIndicator = forwardRef<
  ElementRef<typeof ItemIndicator>,
  ContextMenuItemIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <ItemIndicator
    ref={forwardedRef}
    className={twMerge(contextMenuItemIndicatorVariants({ className }))}
    {...props}
  />
));

ContextMenuItemIndicator.displayName = ItemIndicator.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuSeparator
 * -------------------------------------------------------------------------- */

export const contextMenuSeparatorVariants = cva('bg-border -mx-1 my-1.5 h-px');

export type ContextMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof Separator
> &
  VariantProps<typeof contextMenuSeparatorVariants>;

export const ContextMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Separator
    ref={forwardedRef}
    className={twMerge(contextMenuSeparatorVariants({ className }))}
    {...props}
  />
));

ContextMenuSeparator.displayName = Separator.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuArrow
 * -------------------------------------------------------------------------- */

export const contextMenuArrowVariants = cva('fill-popover');

export type ContextMenuArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof contextMenuArrowVariants>;

export const ContextMenuArrow = forwardRef<
  ElementRef<typeof Arrow>,
  ContextMenuArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(contextMenuArrowVariants({ className }))}
    {...props}
  />
));

ContextMenuArrow.displayName = Arrow.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuSub
 * -------------------------------------------------------------------------- */

export const ContextMenuSub = Sub;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuSubTrigger
 * -------------------------------------------------------------------------- */

export const contextMenuSubTriggerVariants = cva(
  [
    'group relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 text-sm outline-none',
    'data-disabled:opacity-50 data-disabled:pointer-events-none',
  ],
  {
    variants: {
      inset: {
        true: 'pl-8',
      },
      variant: {
        default: [
          'focus:bg-accent focus:text-accent-foreground',
          'data-state-open:bg-accent data-state-open:text-accent-foreground',
          'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
          'data-highlighted:data-state-open:bg-accent data-highlighted:data-state-open:text-accent-foreground',
        ],
        destructive: [
          'focus:bg-destructive-foreground focus:text-destructive',
          'data-state-open:bg-destructive-foreground data-state-open:text-destructive',
          'data-highlighted:bg-destructive-foreground data-highlighted:text-destructive',
          'data-highlighted:data-state-open:bg-destructive-foreground data-highlighted:data-state-open:text-destructive',
        ],
      },
    },
    defaultVariants: {
      inset: false,
      variant: 'default',
    },
  },
);

export type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof SubTrigger
> &
  VariantProps<typeof contextMenuSubTriggerVariants>;

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ContextMenuSubTriggerProps
>(({ className, inset, variant, ...props }, forwardedRef) => (
  <SubTrigger
    ref={forwardedRef}
    className={twMerge(
      contextMenuSubTriggerVariants({
        className,
        inset,
        variant,
      }),
    )}
    {...props}
  />
));

ContextMenuSubTrigger.displayName = SubTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuSubContent
 * -------------------------------------------------------------------------- */

export const contextMenuSubContentVariants = cva([
  'bg-popover text-popover-foreground relative z-10 min-w-[12rem] rounded-md border p-1 shadow-lg will-change-[opacity,transform]',
  [
    'data-state-open:data-side-top:animate-slide-in-from-bottom',
    'data-state-open:data-side-bottom:animate-slide-in-from-top',
    'data-state-open:data-side-left:animate-slide-in-from-right',
    'data-state-open:data-side-right:animate-slide-in-from-left',
  ],
  [
    'data-state-closed:data-side-top:animate-slide-out-to-bottom',
    'data-state-closed:data-side-bottom:animate-slide-out-to-top',
    'data-state-closed:data-side-left:animate-slide-out-to-right',
    'data-state-closed:data-side-right:animate-slide-out-to-left',
  ],
]);

export type ContextMenuSubContentProps = ComponentPropsWithoutRef<
  typeof SubContent
> &
  VariantProps<typeof contextMenuSubContentVariants>;

export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  ContextMenuSubContentProps
>(({ className, ...props }, forwardedRef) => (
  <SubContent
    ref={forwardedRef}
    className={twMerge(contextMenuSubContentVariants({ className }))}
    {...props}
  />
));

ContextMenuSubContent.displayName = SubContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuShortcut
 * -------------------------------------------------------------------------- */

export const contextMenuShortcutVariants = cva(
  'text-muted-foreground ml-auto flex pl-4 text-xs',
);

export type ContextMenuShortcutProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof contextMenuShortcutVariants>;

export const ContextMenuShortcut: FC<ContextMenuShortcutProps> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(contextMenuShortcutVariants({ className }))}
    {...props}
  />
);
