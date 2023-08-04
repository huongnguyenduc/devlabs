'use client';

import { ElementRef, forwardRef } from 'react';
import {
  HoverCardContent as HoverCardPrimitiveContent,
  HoverCardContentProps,
  HoverCardPortal,
} from './core/hover-card';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/hover-card';

/* -----------------------------------------------------------------------------
 * Component: HoverCardContent
 * -------------------------------------------------------------------------- */

export const HoverCardContent = forwardRef<
  ElementRef<typeof HoverCardPrimitiveContent>,
  HoverCardContentProps
>((props, forwardedRef) => (
  <HoverCardPortal>
    <HoverCardPrimitiveContent ref={forwardedRef} sideOffset={5} {...props} />
  </HoverCardPortal>
));

HoverCardContent.displayName = HoverCardPrimitiveContent.displayName;
