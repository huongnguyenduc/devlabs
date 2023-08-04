import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: TooltipProvider
 * -------------------------------------------------------------------------- */

export const TooltipProvider = Provider;

/* -----------------------------------------------------------------------------
 * Component: Tooltip
 * -------------------------------------------------------------------------- */

export const Tooltip = Root;

/* -----------------------------------------------------------------------------
 * Component: TooltipTrigger
 * -------------------------------------------------------------------------- */

export const TooltipTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: TooltipPortal
 * -------------------------------------------------------------------------- */

export const TooltipPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: TooltipContent
 * -------------------------------------------------------------------------- */

export const tooltipContentVariants = cva(
  [
    'bg-popover text-popover-foreground relative z-10 select-none rounded-md px-3 py-1.5 text-sm drop-shadow will-change-[transform,opacity]',
    [
      'data-state-delayed-open:data-side-top:animate-slide-in-from-bottom',
      'data-state-delayed-open:data-side-bottom:animate-slide-in-from-top',
      'data-state-delayed-open:data-side-left:animate-slide-in-from-right',
      'data-state-delayed-open:data-side-right:animate-slide-in-from-left',
    ],
    [
      'data-state-closed:data-side-top:animate-slide-out-to-bottom',
      'data-state-closed:data-side-bottom:animate-slide-out-to-top',
      'data-state-closed:data-side-left:animate-slide-out-to-right',
      'data-state-closed:data-side-right:animate-slide-out-to-left',
    ],
  ],
  {
    variants: {
      size: {
        auto: 'w-auto',
        xs: 'max-w-xs' /* 320px */,
        sm: 'max-w-sm' /* 384px */,
        md: 'max-w-md' /* 448px */,
        lg: 'max-w-lg' /* 512px */,
        xl: 'max-w-xl' /* 576px */,
        '2xl': 'max-w-2xl' /* 672px */,
        '3xl': 'max-w-3xl' /* 768px */,
        '4xl': 'max-w-4xl' /* 896px */,
        '5xl': 'max-w-5xl' /* 1024px */,
        '6xl': 'max-w-6xl' /* 1152px */,
        '7xl': 'max-w-7xl' /* 1280px */,
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type TooltipContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof tooltipContentVariants>;

export const TooltipContent = forwardRef<
  ElementRef<typeof Content>,
  TooltipContentProps
>(({ className, size = 'md', ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(tooltipContentVariants({ className, size }))}
    {...props}
  />
));

TooltipContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: TooltipArrow
 * -------------------------------------------------------------------------- */

export const tooltipArrowVariants = cva('fill-popover');

export type TooltipArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof tooltipArrowVariants>;

export const TooltipArrow = forwardRef<
  ElementRef<typeof Arrow>,
  TooltipArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(tooltipArrowVariants({ className }))}
    {...props}
  />
));

TooltipArrow.displayName = Arrow.displayName;
