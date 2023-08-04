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
} from '@radix-ui/react-dropdown-menu';
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
 * Component: DropdownMenu
 * -------------------------------------------------------------------------- */

export const DropdownMenu = Root;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuTrigger
 * -------------------------------------------------------------------------- */

export const DropdownMenuTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuPortal
 * -------------------------------------------------------------------------- */

export const DropdownMenuPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuContent
 * -------------------------------------------------------------------------- */

export const dropdownMenuContentVariants = cva([
  'p-1.25 bg-popover text-popover-foreground relative z-10 min-w-[12rem] rounded-md border shadow-lg will-change-[opacity,transform]',
  [
    'data-state-open:data-side-top:animate-slide-in-from-top',
    'data-state-open:data-side-bottom:animate-slide-in-from-bottom',
    'data-state-open:data-side-left:animate-slide-in-from-left',
    'data-state-open:data-side-right:animate-slide-in-from-right',
  ],
  [
    'data-state-closed:data-side-top:animate-slide-out-to-top',
    'data-state-closed:data-side-bottom:animate-slide-out-to-bottom',
    'data-state-closed:data-side-left:animate-slide-out-to-left',
    'data-state-closed:data-side-right:animate-slide-out-to-right',
  ],
]);

export type DropdownMenuContentProps = ComponentPropsWithoutRef<
  typeof Content
> &
  VariantProps<typeof dropdownMenuContentVariants>;

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof Content>,
  DropdownMenuContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(dropdownMenuContentVariants({ className }))}
    {...props}
  />
));

DropdownMenuContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuGroup
 * -------------------------------------------------------------------------- */

export const DropdownMenuGroup = Group;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuLabel
 * -------------------------------------------------------------------------- */

export const dropdownMenuLabelVariants = cva(
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

export type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof Label> &
  VariantProps<typeof dropdownMenuLabelVariants>;

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  DropdownMenuLabelProps
>(({ className, inset = false, ...props }, forwardedRef) => (
  <Label
    ref={forwardedRef}
    className={twMerge(dropdownMenuLabelVariants({ className, inset }))}
    {...props}
  />
));

DropdownMenuLabel.displayName = Label.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuItem
 * -------------------------------------------------------------------------- */

export const dropdownMenuItemVariants = cva(
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

export type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof dropdownMenuItemVariants>;

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  DropdownMenuItemProps
>(({ className, inset, variant, ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={twMerge(
      dropdownMenuItemVariants({
        className,
        inset,
        variant,
      }),
    )}
    {...props}
  />
));

DropdownMenuItem.displayName = Item.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuCheckboxItem
 * -------------------------------------------------------------------------- */

export const dropdownMenuCheckboxItemVariants = cva(
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

export type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof CheckboxItem
> &
  VariantProps<typeof dropdownMenuCheckboxItemVariants>;

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, variant = 'default', ...props }, forwardedRef) => (
  <CheckboxItem
    ref={forwardedRef}
    className={twMerge(
      dropdownMenuCheckboxItemVariants({
        className,
        variant,
      }),
    )}
    {...props}
  />
));

DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuRadioGroup
 * -------------------------------------------------------------------------- */

export const DropdownMenuRadioGroup = RadioGroup;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuRadioItem
 * -------------------------------------------------------------------------- */

export const dropdownMenuRadioItemVariants = cva(
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

export type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof RadioItem
> &
  VariantProps<typeof dropdownMenuRadioItemVariants>;

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, variant, ...props }, forwardedRef) => (
  <RadioItem
    ref={forwardedRef}
    className={twMerge(dropdownMenuRadioItemVariants({ className, variant }))}
    {...props}
  />
));

DropdownMenuRadioItem.displayName = RadioItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuItemIndicator
 * -------------------------------------------------------------------------- */

export const dropdownMenuItemIndicatorVariants = cva(
  'absolute left-0 inline-flex w-8 items-center justify-center',
);

export type DropdownMenuItemIndicatorProps = ComponentPropsWithoutRef<
  typeof ItemIndicator
> &
  VariantProps<typeof dropdownMenuItemIndicatorVariants>;

export const DropdownMenuItemIndicator = forwardRef<
  ElementRef<typeof ItemIndicator>,
  DropdownMenuItemIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <ItemIndicator
    ref={forwardedRef}
    className={twMerge(dropdownMenuItemIndicatorVariants({ className }))}
    {...props}
  />
));

DropdownMenuItemIndicator.displayName = ItemIndicator.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuSeparator
 * -------------------------------------------------------------------------- */

export const dropdownMenuSeparatorVariants = cva('bg-border -mx-1 my-1.5 h-px');

export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof Separator
> &
  VariantProps<typeof dropdownMenuSeparatorVariants>;

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Separator
    ref={forwardedRef}
    className={twMerge(dropdownMenuSeparatorVariants({ className }))}
    {...props}
  />
));

DropdownMenuSeparator.displayName = Separator.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuArrow
 * -------------------------------------------------------------------------- */

export const dropdownMenuArrowVariants = cva('fill-popover');

export type DropdownMenuArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof dropdownMenuArrowVariants>;

export const DropdownMenuArrow = forwardRef<
  ElementRef<typeof Arrow>,
  DropdownMenuArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(dropdownMenuArrowVariants({ className }))}
    {...props}
  />
));

DropdownMenuArrow.displayName = Arrow.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuSub
 * -------------------------------------------------------------------------- */

export const DropdownMenuSub = Sub;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuSubTrigger
 * -------------------------------------------------------------------------- */

export const dropdownMenuSubTriggerVariants = cva(
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

export type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof SubTrigger
> &
  VariantProps<typeof dropdownMenuSubTriggerVariants>;

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset = false, variant, ...props }, forwardedRef) => (
  <SubTrigger
    ref={forwardedRef}
    className={twMerge(
      dropdownMenuSubTriggerVariants({
        className,
        inset,
        variant,
      }),
    )}
    {...props}
  />
));

DropdownMenuSubTrigger.displayName = SubTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuSubContent
 * -------------------------------------------------------------------------- */

export const dropdownMenuSubContentVariants = cva([
  'bg-popover text-popover-foreground relative z-10 min-w-[12rem] rounded-md border p-1 shadow-lg will-change-[opacity,transform]',
  [
    'data-state-open:data-side-top:animate-slide-in-from-top',
    'data-state-open:data-side-bottom:animate-slide-in-from-bottom',
    'data-state-open:data-side-left:animate-slide-in-from-left',
    'data-state-open:data-side-right:animate-slide-in-from-right',
  ],
  [
    'data-state-closed:data-side-top:animate-slide-out-to-top',
    'data-state-closed:data-side-bottom:animate-slide-out-to-bottom',
    'data-state-closed:data-side-left:animate-slide-out-to-left',
    'data-state-closed:data-side-right:animate-slide-out-to-right',
  ],
]);

export type DropdownMenuSubContentProps = ComponentPropsWithoutRef<
  typeof SubContent
> &
  VariantProps<typeof dropdownMenuSubContentVariants>;

export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  DropdownMenuSubContentProps
>(({ className, ...props }, forwardedRef) => (
  <SubContent
    ref={forwardedRef}
    className={twMerge(dropdownMenuSubContentVariants({ className }))}
    {...props}
  />
));

DropdownMenuSubContent.displayName = SubContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuShortcut
 * -------------------------------------------------------------------------- */

export const dropdownMenuShortcutVariants = cva(
  'text-muted-foreground ml-auto flex pl-4 text-xs',
);

export type DropdownMenuShortcutProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dropdownMenuShortcutVariants>;

export const DropdownMenuShortcut: FC<DropdownMenuShortcutProps> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(dropdownMenuShortcutVariants({ className }))}
    {...props}
  />
);
