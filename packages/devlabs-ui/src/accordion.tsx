'use client';

import { ChevronDownIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import {
  AccordionHeader,
  AccordionTrigger as AccordionPrimitiveTrigger,
} from './core/accordion';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/accordion';

/* -----------------------------------------------------------------------------
 * Component: AccordionTrigger
 * -------------------------------------------------------------------------- */

export type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitiveTrigger
>;

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitiveTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionHeader>
    <AccordionPrimitiveTrigger ref={forwardedRef} {...props}>
      <Fragment>
        {children}
        <ChevronDownIcon
          aria-hidden
          className="group-data-state-open:rotate-180 text-primary h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
        />
      </Fragment>
    </AccordionPrimitiveTrigger>
  </AccordionHeader>
));

AccordionTrigger.displayName = AccordionPrimitiveTrigger.displayName;
