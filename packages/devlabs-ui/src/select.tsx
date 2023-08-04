'use client';

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import {
  SelectContent as SelectPrimitiveContent,
  SelectIcon,
  SelectItem as SelectPrimitiveItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger as SelectPrimitiveTrigger,
  SelectViewport,
} from './core/select';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/select';

/* -----------------------------------------------------------------------------
 * Component: SelectTrigger
 * -------------------------------------------------------------------------- */

export type SelectTriggerProps = ComponentPropsWithoutRef<
  typeof SelectPrimitiveTrigger
>;

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitiveTrigger>,
  SelectTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <SelectPrimitiveTrigger ref={forwardedRef} {...props}>
    <Fragment>
      {children}
      <SelectIcon>
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </SelectIcon>
    </Fragment>
  </SelectPrimitiveTrigger>
));

SelectTrigger.displayName = SelectPrimitiveTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectContent
 * -------------------------------------------------------------------------- */

export const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitiveContent>,
  ComponentPropsWithoutRef<typeof SelectPrimitiveContent>
>(({ children, ...props }, forwardedRef) => (
  <SelectPortal>
    <SelectPrimitiveContent ref={forwardedRef} sideOffset={5} {...props}>
      <Fragment>
        <SelectScrollUpButton>
          <ChevronUpIcon className="h-4 w-4 opacity-50" />
        </SelectScrollUpButton>

        <SelectViewport>{children}</SelectViewport>

        <SelectScrollDownButton>
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </SelectScrollDownButton>
      </Fragment>
    </SelectPrimitiveContent>
  </SelectPortal>
));

SelectContent.displayName = SelectPrimitiveContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: SelectItem
 * -------------------------------------------------------------------------- */

export type SelectItemProps = ComponentPropsWithoutRef<
  typeof SelectPrimitiveItem
>;

export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitiveItem>,
  SelectItemProps
>(({ children, ...props }, forwardedRef) => (
  <SelectPrimitiveItem ref={forwardedRef} {...props}>
    <Fragment>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectItemIndicator>
    </Fragment>
  </SelectPrimitiveItem>
));

SelectItem.displayName = SelectPrimitiveItem.displayName;
