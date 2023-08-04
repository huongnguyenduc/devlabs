'use client';

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useContext,
} from 'react';
import {
  RadioGroupContext,
  RadioGroupIndicator,
  RadioGroupItem as RadioGroupPrimitiveItem,
} from './core/radio-group';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/radio-group';

/* -----------------------------------------------------------------------------
 * Component: RadioGroupItem
 * -------------------------------------------------------------------------- */

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitiveItem>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitiveItem>
>(({ children, ...props }, forwardedRef) => {
  const { variant } = useContext(RadioGroupContext);

  return (
    <RadioGroupPrimitiveItem ref={forwardedRef} {...props}>
      {variant === 'default' ? <RadioGroupIndicator /> : children}
    </RadioGroupPrimitiveItem>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitiveItem.displayName;
