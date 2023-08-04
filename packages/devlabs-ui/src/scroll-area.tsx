'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import {
  ScrollArea as ScrollAreaPrimitive,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './core/scroll-area';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/scroll-area';

/* -----------------------------------------------------------------------------
 * Component: ScrollArea
 * -------------------------------------------------------------------------- */

export type ScrollAreaProps = ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive
>;

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive>,
  ScrollAreaProps
>(({ children, ...props }, forwardedRef) => (
  <ScrollAreaPrimitive ref={forwardedRef} {...props}>
    <ScrollAreaViewport>{children}</ScrollAreaViewport>

    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>

    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>

    <ScrollAreaCorner />
  </ScrollAreaPrimitive>
));

ScrollArea.displayName = ScrollAreaPrimitive.displayName;
