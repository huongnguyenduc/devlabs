import {
  Arrow,
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Menu,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from '@radix-ui/react-menubar';
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
 * Component: Menubar
 * -------------------------------------------------------------------------- */

export const menubarVariants = cva(
  'bg-background flex h-10 items-center space-x-1 rounded-md border p-1',
);

export type MenubarProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof menubarVariants>;

export const Menubar = forwardRef<ElementRef<typeof Root>, MenubarProps>(
  ({ className, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(menubarVariants({ className }))}
      {...props}
    />
  ),
);

Menubar.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarMenu
 * -------------------------------------------------------------------------- */

export const MenubarMenu = Menu;

/* -----------------------------------------------------------------------------
 * Component: MenubarTrigger
 * -------------------------------------------------------------------------- */

export const menubarTriggerVariants = cva([
  'flex cursor-pointer select-none items-center justify-between gap-1 rounded px-3 py-1.5 text-sm font-medium outline-none',
  'focus:bg-accent focus:text-accent-foreground',
  'data-state-open:bg-accent data-state-open:text-accent-foreground',
]);

export type MenubarTriggerProps = ComponentPropsWithoutRef<typeof Trigger> &
  VariantProps<typeof menubarTriggerVariants>;

export const MenubarTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  MenubarTriggerProps
>(({ className, ...props }, forwardedRef) => (
  <Trigger
    ref={forwardedRef}
    className={twMerge(menubarTriggerVariants({ className }))}
    {...props}
  />
));

MenubarTrigger.displayName = Trigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarPortal
 * -------------------------------------------------------------------------- */

export const MenubarPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: MenubarContent
 * -------------------------------------------------------------------------- */

export const menubarContentVariants = cva([
  'bg-popover text-popover-foreground relative z-10 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-lg',
  [
    'data-state-open:data-side-top:animate-slide-in-from-top',
    'data-state-open:data-side-bottom:animate-slide-in-from-bottom',
    'data-state-open:data-side-left:animate-slide-in-from-left',
    'data-state-open:data-side-right:animate-slide-in-from-right',
  ],
]);

export type MenubarContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof menubarContentVariants>;

export const MenubarContent = forwardRef<
  ElementRef<typeof Content>,
  MenubarContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(menubarContentVariants({ className }))}
    {...props}
  />
));

MenubarContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarGroup
 * -------------------------------------------------------------------------- */

export const MenubarGroup = Group;

/* -----------------------------------------------------------------------------
 * Component: MenubarLabel
 * -------------------------------------------------------------------------- */

export const menubarLabelVariants = cva(
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

export type MenubarLabelProps = ComponentPropsWithoutRef<typeof Label> &
  VariantProps<typeof menubarLabelVariants>;

export const MenubarLabel = forwardRef<
  ElementRef<typeof Label>,
  MenubarLabelProps
>(({ className, inset = false, ...props }, forwardedRef) => (
  <Label
    ref={forwardedRef}
    className={twMerge(menubarLabelVariants({ className, inset }))}
    {...props}
  />
));

MenubarLabel.displayName = Label.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarItem
 * -------------------------------------------------------------------------- */

export const menubarItemVariants = cva(
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

export type MenubarItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof menubarItemVariants>;

export const MenubarItem = forwardRef<
  ElementRef<typeof Item>,
  MenubarItemProps
>(({ className, inset, variant, ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={twMerge(menubarItemVariants({ className, inset, variant }))}
    {...props}
  />
));

MenubarItem.displayName = Item.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarCheckboxItem
 * -------------------------------------------------------------------------- */

export const menubarCheckboxItemVariants = cva(
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

export type MenubarCheckboxItemProps = ComponentPropsWithoutRef<
  typeof CheckboxItem
> &
  VariantProps<typeof menubarCheckboxItemVariants>;

export const MenubarCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  MenubarCheckboxItemProps
>(({ className, variant = 'default', ...props }, forwardedRef) => (
  <CheckboxItem
    ref={forwardedRef}
    className={twMerge(menubarCheckboxItemVariants({ className, variant }))}
    {...props}
  />
));

MenubarCheckboxItem.displayName = CheckboxItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarRadioGroup
 * -------------------------------------------------------------------------- */

export const MenubarRadioGroup = RadioGroup;

/* -----------------------------------------------------------------------------
 * Component: MenubarRadioItem
 * -------------------------------------------------------------------------- */

export const menubarRadioItemVariants = cva(
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

export type MenubarRadioItemProps = ComponentPropsWithoutRef<typeof RadioItem> &
  VariantProps<typeof menubarRadioItemVariants>;

export const MenubarRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  MenubarRadioItemProps
>(({ className, variant, ...props }, forwardedRef) => (
  <RadioItem
    ref={forwardedRef}
    className={twMerge(menubarRadioItemVariants({ className, variant }))}
    {...props}
  />
));

MenubarRadioItem.displayName = RadioItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarItemIndicator
 * -------------------------------------------------------------------------- */

export const menubarItemIndicatorVariants = cva(
  'absolute left-0 inline-flex w-8 items-center justify-center',
);

export type MenubarItemIndicatorProps = ComponentPropsWithoutRef<
  typeof ItemIndicator
> &
  VariantProps<typeof menubarItemIndicatorVariants>;

export const MenubarItemIndicator = forwardRef<
  ElementRef<typeof ItemIndicator>,
  MenubarItemIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <ItemIndicator
    ref={forwardedRef}
    className={twMerge(menubarItemIndicatorVariants({ className }))}
    {...props}
  />
));

MenubarItemIndicator.displayName = ItemIndicator.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarSeparator
 * -------------------------------------------------------------------------- */

export const menubarSeparatorVariants = cva('bg-muted -mx-1 my-1.5 h-px');

export type MenubarSeparatorProps = ComponentPropsWithoutRef<typeof Separator> &
  VariantProps<typeof menubarSeparatorVariants>;

export const MenubarSeparator = forwardRef<
  ElementRef<typeof Separator>,
  MenubarSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Separator
    ref={forwardedRef}
    className={twMerge(menubarSeparatorVariants({ className }))}
    {...props}
  />
));

MenubarSeparator.displayName = Separator.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarArrow
 * -------------------------------------------------------------------------- */

export const menubarArrowVariants = cva('fill-popover');

export type MenubarArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof menubarArrowVariants>;

export const MenubarArrow = forwardRef<
  ElementRef<typeof Arrow>,
  MenubarArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(menubarArrowVariants({ className }))}
    {...props}
  />
));

MenubarArrow.displayName = Arrow.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarSub
 * -------------------------------------------------------------------------- */

export const MenubarSub = Sub;

/* -----------------------------------------------------------------------------
 * Component: MenubarSubTrigger
 * -------------------------------------------------------------------------- */

export const menubarSubTriggerVariants = cva(
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

export type MenubarSubTriggerProps = ComponentPropsWithoutRef<
  typeof SubTrigger
> &
  VariantProps<typeof menubarSubTriggerVariants>;

export const MenubarSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  MenubarSubTriggerProps
>(({ className, inset, variant, ...props }, forwardedRef) => (
  <SubTrigger
    ref={forwardedRef}
    className={twMerge(
      menubarSubTriggerVariants({
        className,
        inset,
        variant,
      }),
    )}
    {...props}
  />
));

MenubarSubTrigger.displayName = SubTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarSubContent
 * -------------------------------------------------------------------------- */

export const menubarSubContentVariants = cva([
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

export type MenubarSubContentProps = ComponentPropsWithoutRef<
  typeof SubContent
> &
  VariantProps<typeof menubarSubContentVariants>;

export const MenubarSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  MenubarSubContentProps
>(({ className, ...props }, forwardedRef) => (
  <SubContent
    ref={forwardedRef}
    className={twMerge(menubarSubContentVariants({ className }))}
    {...props}
  />
));

MenubarSubContent.displayName = SubContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarShortcut
 * -------------------------------------------------------------------------- */

export const menubarShortcutVariants = cva(
  'text-muted-foreground ml-auto flex pl-4 text-xs',
);

export type MenubarShortcutProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof menubarShortcutVariants>;

export const MenubarShortcut: FC<MenubarShortcutProps> = ({
  className,
  ...props
}) => (
  <div className={twMerge(menubarShortcutVariants({ className }))} {...props} />
);
