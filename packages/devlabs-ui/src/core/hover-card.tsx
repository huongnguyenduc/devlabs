import {
  Arrow,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-hover-card';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: HoverCard
 * -------------------------------------------------------------------------- */

export const HoverCard = Root;

/* -----------------------------------------------------------------------------
 * Component: HoverCardTrigger
 * -------------------------------------------------------------------------- */

export const HoverCardTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: HoverCardPortal
 * -------------------------------------------------------------------------- */

export const HoverCardPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: HoverCardContent
 * -------------------------------------------------------------------------- */

export const hoverCardContentVariants = cva(
  [
    'bg-popover text-popover-foreground relative z-10 rounded-md border p-4 shadow-lg will-change-[opacity,transform]',
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
      size: 'md',
    },
  },
);

export type HoverCardContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof hoverCardContentVariants>;

export const HoverCardContent = forwardRef<
  ElementRef<typeof Content>,
  HoverCardContentProps
>(({ className, size, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    {...props}
    className={twMerge(hoverCardContentVariants({ className, size }))}
  />
));

HoverCardContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: HoverCardArrow
 * -------------------------------------------------------------------------- */

export const hoverCardArrowVariants = cva('fill-popover');

export type HoverCardArrowProps = ComponentPropsWithoutRef<typeof Arrow> &
  VariantProps<typeof hoverCardArrowVariants>;

export const HoverCardArrow = forwardRef<
  ElementRef<typeof Arrow>,
  HoverCardArrowProps
>(({ className, ...props }, forwardedRef) => (
  <Arrow
    ref={forwardedRef}
    className={twMerge(hoverCardArrowVariants({ className }))}
    {...props}
  />
));

HoverCardArrow.displayName = Arrow.displayName;
