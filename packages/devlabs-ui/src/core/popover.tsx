import {
  Anchor,
  Arrow,
  Close,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-popover';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  FC,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Provider: PopoverContext
 * -------------------------------------------------------------------------- */

export type PopoverContextValue = Pick<PopoverProps, 'variant'>;

export const PopoverContext = createContext<PopoverContextValue>(
  {} as PopoverContextValue,
);

/* -----------------------------------------------------------------------------
 * Component: Popover
 * -------------------------------------------------------------------------- */

export type PopoverProps = ComponentProps<typeof Root> & {
  variant?: 'default' | 'simple';
};

export const Popover: FC<PopoverProps> = ({
  variant = 'default',
  ...props
}) => (
  <PopoverContext.Provider value={{ variant }}>
    <Root {...props} />
  </PopoverContext.Provider>
);

/* -----------------------------------------------------------------------------
 * Component: PopoverAnchor
 * -------------------------------------------------------------------------- */

export const PopoverAnchor = Anchor;

/* -----------------------------------------------------------------------------
 * Component: PopoverTrigger
 * -------------------------------------------------------------------------- */

export const PopoverTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: PopoverPortal
 * -------------------------------------------------------------------------- */

export const PopoverPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: PopoverContent
 * -------------------------------------------------------------------------- */

export const popoverContentVariants = cva(
  [
    'bg-popover text-popover-foreground relative z-20 rounded-xl border shadow-lg will-change-[opacity,transform]',
    'min-w-[var(--radix-popover-trigger-width)]',
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
      size: {
        auto: 'w-auto',
        xs: 'w-xs' /* 320px */,
        sm: 'w-sm' /* 384px */,
        md: 'w-md' /* 448px */,
        lg: 'w-lg' /* 512px */,
        xl: 'w-xl' /* 576px */,
        '2xl': 'w-2xl' /* 672px */,
        '3xl': 'w-3xl' /* 768px */,
        '4xl': 'w-4xl' /* 896px */,
        '5xl': 'w-5xl' /* 1024px */,
        '6xl': 'w-6xl' /* 1152px */,
        '7xl': 'w-7xl' /* 1280px */,
      },
    },
    defaultVariants: {
      size: 'auto',
    },
  },
);

export type PopoverContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof popoverContentVariants>;

export const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  PopoverContentProps
>(({ className, size, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(popoverContentVariants({ className, size }))}
    {...props}
  />
));

PopoverContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: PopoverClose
 * -------------------------------------------------------------------------- */

export const PopoverClose = Close;

/* -----------------------------------------------------------------------------
 * Component: PopoverArrow
 * -------------------------------------------------------------------------- */

export const popoverArrowVariants = cva('fill-popover');

export type PopoverArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof popoverArrowVariants>;

export const PopoverArrow = forwardRef<
  ElementRef<typeof Arrow>,
  PopoverArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(popoverArrowVariants({ className }))}
    {...props}
  />
));

PopoverArrow.displayName = Arrow.displayName;
