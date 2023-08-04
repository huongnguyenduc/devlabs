'use client';

import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  Fragment,
} from 'react';
import {
  Tooltip as TooltipPrimitive,
  TooltipArrow,
  TooltipContent as TooltipPrimitiveContent,
  TooltipPortal,
  TooltipProvider,
} from './core/tooltip';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/tooltip';

/* -----------------------------------------------------------------------------
 * Component: Tooltip
 * -------------------------------------------------------------------------- */

export type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive>;

export const Tooltip: FC<TooltipProps> = (props) => (
  <TooltipProvider>
    <TooltipPrimitive delayDuration={250} {...props} />
  </TooltipProvider>
);

/* -----------------------------------------------------------------------------
 * Component: TooltipContent
 * -------------------------------------------------------------------------- */

export type TooltipContentProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitiveContent
>;

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitiveContent>,
  TooltipContentProps
>(({ children, ...props }, forwardedRef) => (
  <TooltipPortal>
    <TooltipPrimitiveContent ref={forwardedRef} sideOffset={5} {...props}>
      <Fragment>
        {children}
        <TooltipArrow />
      </Fragment>
    </TooltipPrimitiveContent>
  </TooltipPortal>
));

TooltipContent.displayName = TooltipPrimitiveContent.displayName;
