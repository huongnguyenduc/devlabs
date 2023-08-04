import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Accordion
 * -------------------------------------------------------------------------- */

export const accordionVariants = cva('divide-y');

export type AccordionProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof accordionVariants>;

export const Accordion = forwardRef<ElementRef<typeof Root>, AccordionProps>(
  ({ className, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(accordionVariants({ className }))}
      {...props}
    />
  ),
);

Accordion.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: AccordionItem
 * -------------------------------------------------------------------------- */

export const accordionItemVariants = cva(
  'overflow-hidden focus-within:relative focus-within:z-10',
);

export type AccordionItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof accordionItemVariants>;

export const AccordionItem = forwardRef<
  ElementRef<typeof Item>,
  AccordionItemProps
>(({ className, ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={twMerge(accordionItemVariants({ className }))}
    {...props}
  />
));

AccordionItem.displayName = Item.displayName;

/* -----------------------------------------------------------------------------
 * Component: AccordionHeader
 * -------------------------------------------------------------------------- */

export const accordionHeaderVariants = cva('flex');

export type AccordionHeaderProps = ComponentPropsWithoutRef<typeof Header> &
  VariantProps<typeof accordionHeaderVariants>;

export const AccordionHeader = forwardRef<
  ElementRef<typeof Header>,
  AccordionHeaderProps
>(({ className, ...props }, forwardedRef) => (
  <Header
    ref={forwardedRef}
    className={twMerge(accordionHeaderVariants({ className }))}
    {...props}
  />
));

AccordionHeader.displayName = Header.displayName;

/* -----------------------------------------------------------------------------
 * Component: AccordionTrigger
 * -------------------------------------------------------------------------- */

export const accordionTriggerVariants = cva(
  'group flex flex-1 cursor-pointer items-center justify-between py-4 text-base font-medium outline-none transition',
);

export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof Trigger> &
  VariantProps<typeof accordionTriggerVariants>;

export const AccordionTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  AccordionTriggerProps
>(({ className, ...props }, forwardedRef) => (
  <Trigger
    ref={forwardedRef}
    className={twMerge(accordionTriggerVariants({ className }))}
    {...props}
  />
));

AccordionTrigger.displayName = Trigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: AccordionContent
 * -------------------------------------------------------------------------- */

export const accordionContentVariants = cva([
  'text-muted-foreground overflow-hidden text-base',
  'data-state-open:animate-collapsible-down data-state-closed:animate-collapsible-up',
]);

export type AccordionContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof accordionContentVariants>;

export const AccordionContent = forwardRef<
  ElementRef<typeof Content>,
  AccordionContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={twMerge(accordionContentVariants({ className }))}
    {...props}
  />
));

AccordionContent.displayName = Content.displayName;
