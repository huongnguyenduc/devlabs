import {
  Arrow,
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Select
 * -------------------------------------------------------------------------- */

export const Select = Root;

/* -----------------------------------------------------------------------------
 * Component: SelectTrigger
 * -------------------------------------------------------------------------- */

export const selectTriggerVariants = cva(
  [
    'border-input inline-flex h-10 select-none items-center justify-between gap-2 rounded-xl border bg-transparent px-3 py-2 text-sm',
    'focus:ring-ring/40 focus:outline-none focus:ring-2',
    'disabled:opacity-50/40 disabled:cursor-not-allowed',
    'placeholder:text-muted-foreground',
  ],
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      size: 'md',
      block: false,
    },
  },
);

export type SelectTriggerProps = ComponentPropsWithoutRef<typeof Trigger> &
  VariantProps<typeof selectTriggerVariants>;

export const SelectTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  SelectTriggerProps
>(({ className, size, block, ...props }, forwardedRef) => (
  <Trigger
    ref={forwardedRef}
    className={twMerge(selectTriggerVariants({ className, size, block }))}
    {...props}
  />
));

SelectTrigger.displayName = Trigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectValue
 * -------------------------------------------------------------------------- */

export const SelectValue = Value;

/* -----------------------------------------------------------------------------
 * Component: SelectIcon
 * -------------------------------------------------------------------------- */

export const selectIconVariants = cva('flex h-4 w-4');

export type SelectIconProps = ComponentPropsWithoutRef<typeof Icon> &
  VariantProps<typeof selectIconVariants>;

export const SelectIcon = forwardRef<ElementRef<typeof Icon>, SelectIconProps>(
  ({ className, ...props }, forwardedRef) => (
    <Icon
      ref={forwardedRef}
      className={twMerge(selectIconVariants({ className }))}
      {...props}
    />
  ),
);

SelectIcon.displayName = Icon.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectPortal
 * -------------------------------------------------------------------------- */

export const SelectPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: SelectContent
 * -------------------------------------------------------------------------- */

export const selectContentVariants = cva(
  [
    'bg-popover text-popover-foreground relative z-30 w-[var(--radix-select-trigger-width)] min-w-max overflow-hidden rounded-md border shadow-lg',
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
  ],
  {
    variants: {
      position: {
        'item-aligned': '',
        popper:
          'max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)]',
      },
    },
    defaultVariants: {
      position: 'item-aligned',
    },
  },
);

export type SelectContentProps = ComponentPropsWithoutRef<typeof Content> &
  Omit<VariantProps<typeof selectContentVariants>, 'position'>;

export const SelectContent = forwardRef<
  ElementRef<typeof Content>,
  SelectContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(
      selectContentVariants({
        className,
        position: props.position ?? 'item-aligned',
      }),
    )}
    {...props}
  />
));

SelectContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectViewport
 * -------------------------------------------------------------------------- */

export const selectViewportVariants = cva('p-1');

export type SelectViewportProps = ComponentProps<typeof Viewport> &
  VariantProps<typeof selectViewportVariants>;

export const SelectViewport: FC<SelectViewportProps> = ({
  className,
  ...props
}) => (
  <Viewport
    className={twMerge(selectViewportVariants({ className }))}
    {...props}
  />
);

/* -----------------------------------------------------------------------------
 * Component: SelectGroup
 * -------------------------------------------------------------------------- */

export const SelectGroup = Group;

/* -----------------------------------------------------------------------------
 * Component: SelectLabel
 * -------------------------------------------------------------------------- */

export const selectLabelVariants = cva('px-8 py-1.5 text-sm font-semibold');

export type SelectLabelProps = ComponentPropsWithoutRef<typeof Label> &
  VariantProps<typeof selectLabelVariants>;

export const SelectLabel = forwardRef<
  ElementRef<typeof Label>,
  SelectLabelProps
>(({ className, ...props }, forwardedRef) => (
  <Label
    ref={forwardedRef}
    className={twMerge(selectLabelVariants({ className }))}
    {...props}
  />
));

SelectLabel.displayName = Label.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectItem
 * -------------------------------------------------------------------------- */

export const selectItemVariants = cva(
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

export type SelectItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof selectItemVariants>;

export const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ className, variant = 'default', ...props }, forwardedRef) => (
    <Item
      ref={forwardedRef}
      className={twMerge(selectItemVariants({ className, variant }))}
      {...props}
    />
  ),
);

SelectItem.displayName = Item.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectItemText
 * -------------------------------------------------------------------------- */

export const SelectItemText = ItemText;

/* -----------------------------------------------------------------------------
 * Component: SelectItemIndicator
 * -------------------------------------------------------------------------- */

export const selectItemIndicatorVariants = cva(
  'absolute left-0 inline-flex w-8 items-center justify-center',
);

export type SelectItemIndicatorProps = ComponentPropsWithoutRef<
  typeof ItemIndicator
> &
  VariantProps<typeof selectItemIndicatorVariants>;

export const SelectItemIndicator = forwardRef<
  ElementRef<typeof ItemIndicator>,
  SelectItemIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <ItemIndicator
    ref={forwardedRef}
    className={twMerge(selectItemIndicatorVariants({ className }))}
    {...props}
  />
));

SelectItemIndicator.displayName = ItemIndicator.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectScrollUpButton
 * -------------------------------------------------------------------------- */

export const selectScrollUpButtonVariants = cva(
  'flex cursor-pointer items-center justify-center py-1.5',
);

export type SelectScrollUpButtonProps = ComponentPropsWithoutRef<
  typeof ScrollUpButton
> &
  VariantProps<typeof selectScrollUpButtonVariants>;

export const SelectScrollUpButton = forwardRef<
  ElementRef<typeof ScrollUpButton>,
  SelectScrollUpButtonProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollUpButton
    ref={forwardedRef}
    className={twMerge(selectScrollUpButtonVariants({ className }))}
    {...props}
  />
));

SelectScrollUpButton.displayName = ScrollUpButton.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectScrollDownButton
 * -------------------------------------------------------------------------- */

export const selectScrollDownButtonVariants = cva(
  'flex cursor-pointer items-center justify-center py-1.5',
);

export type SelectScrollDownButtonProps = ComponentPropsWithoutRef<
  typeof ScrollDownButton
> &
  VariantProps<typeof selectScrollDownButtonVariants>;

export const SelectScrollDownButton = forwardRef<
  ElementRef<typeof ScrollDownButton>,
  SelectScrollDownButtonProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollDownButton
    ref={forwardedRef}
    className={twMerge(selectScrollDownButtonVariants({ className }))}
    {...props}
  />
));

SelectScrollDownButton.displayName = ScrollDownButton.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectSeparator
 * -------------------------------------------------------------------------- */

export const selectSeparatorVariants = cva('bg-border -mx-1 my-1.5 h-px');

export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof Separator> &
  VariantProps<typeof selectSeparatorVariants>;

export const SelectSeparator = forwardRef<
  ElementRef<typeof Separator>,
  SelectSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Separator
    ref={forwardedRef}
    className={twMerge(selectSeparatorVariants({ className }))}
    {...props}
  />
));

SelectSeparator.displayName = Separator.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectArrow
 * -------------------------------------------------------------------------- */

export const selectArrowVariants = cva('fill-popover');

export type SelectArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof selectArrowVariants>;

export const SelectArrow = forwardRef<
  ElementRef<typeof Arrow>,
  SelectArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(selectArrowVariants({ className }))}
    {...props}
  />
));

SelectArrow.displayName = Arrow.displayName;
