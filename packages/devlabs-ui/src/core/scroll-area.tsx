import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: ScrollArea
 * -------------------------------------------------------------------------- */

export const scrollAreaVariants = cva('relative overflow-hidden');

export type ScrollAreaProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof scrollAreaVariants>;

export const ScrollArea = forwardRef<ElementRef<typeof Root>, ScrollAreaProps>(
  ({ className, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(scrollAreaVariants({ className }))}
      {...props}
    />
  ),
);

ScrollArea.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: ScrollAreaViewport
 * -------------------------------------------------------------------------- */

export const scrollAreaViewportVariants = cva('rounded-inherit h-full w-full');

export type ScrollAreaViewportProps = ComponentPropsWithoutRef<
  typeof Viewport
> &
  VariantProps<typeof scrollAreaViewportVariants>;

export const ScrollAreaViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ScrollAreaViewportProps
>(({ className, ...props }, forwardedRef) => (
  <Viewport
    ref={forwardedRef}
    className={twMerge(scrollAreaViewportVariants({ className }))}
    {...props}
  />
));

ScrollAreaViewport.displayName = Viewport.displayName;

/* -----------------------------------------------------------------------------
 * Component: ScrollAreaScrollbar
 * -------------------------------------------------------------------------- */

export const scrollAreaScrollbarVariants = cva([
  'flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out',
  'data-orientation-horizontal:h-2.5 data-orientation-horizontal:flex-col',
  'data-orientation-vertical:w-2.5',
]);

export type ScrollAreaScrollbarProps = ComponentPropsWithoutRef<
  typeof Scrollbar
> &
  VariantProps<typeof scrollAreaScrollbarVariants>;

export const ScrollAreaScrollbar = forwardRef<
  ElementRef<typeof Scrollbar>,
  ScrollAreaScrollbarProps
>(({ className, ...props }, forwardedRef) => (
  <Scrollbar
    ref={forwardedRef}
    className={twMerge(scrollAreaScrollbarVariants({ className }))}
    {...props}
  />
));

ScrollAreaScrollbar.displayName = Scrollbar.displayName;

/* -----------------------------------------------------------------------------
 * Component: ScrollAreaThumb
 * -------------------------------------------------------------------------- */

export const scrollAreaThumbVariants = cva([
  'bg-border relative flex-1 rounded-full',
  'before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
]);

export type ScrollAreaThumbProps = ComponentPropsWithoutRef<typeof Thumb> &
  VariantProps<typeof scrollAreaThumbVariants>;

export const ScrollAreaThumb = forwardRef<
  ElementRef<typeof Thumb>,
  ScrollAreaThumbProps
>(({ className, ...props }, forwardedRef) => (
  <Thumb
    ref={forwardedRef}
    className={twMerge(scrollAreaThumbVariants({ className }))}
    {...props}
  />
));

ScrollAreaThumb.displayName = Thumb.displayName;

/* -----------------------------------------------------------------------------
 * Component: ScrollAreaCorner
 * -------------------------------------------------------------------------- */

export const scrollAreaCornerVariants = cva('bg-black/20');

export type ScrollAreaCornerProps = ComponentPropsWithoutRef<typeof Corner> &
  VariantProps<typeof scrollAreaCornerVariants>;

export const ScrollAreaCorner = forwardRef<
  ElementRef<typeof Corner>,
  ScrollAreaCornerProps
>(({ className, ...props }, forwardedRef) => (
  <Corner
    ref={forwardedRef}
    className={twMerge(scrollAreaCornerVariants({ className }))}
    {...props}
  />
));

ScrollAreaCorner.displayName = Corner.displayName;
