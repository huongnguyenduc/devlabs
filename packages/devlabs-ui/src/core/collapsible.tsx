import { Content, Root, Trigger } from '@radix-ui/react-collapsible';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Collapsible
 * -------------------------------------------------------------------------- */

export const Collapsible = Root;

/* -----------------------------------------------------------------------------
 * Component: CollapsibleTrigger
 * -------------------------------------------------------------------------- */

export const CollapsibleTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: CollapsibleContent
 * -------------------------------------------------------------------------- */

export const collapsibleContentVariants = cva([
  'overflow-hidden',
  'data-state-open:animate-collapsible-down data-state-closed:animate-collapsible-up',
]);

export type CollapsibleContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof collapsibleContentVariants>;

export const CollapsibleContent = forwardRef<
  ElementRef<typeof Content>,
  CollapsibleContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(collapsibleContentVariants({ className }))}
    {...props}
  />
));

CollapsibleContent.displayName = Content.displayName;
