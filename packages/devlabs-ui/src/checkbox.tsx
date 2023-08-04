'use client';

import { CheckIcon, MinusIcon } from 'lucide-react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import {
  Checkbox as CheckboxPrimitive,
  CheckboxIndicator,
} from './core/checkbox';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/checkbox';

/* -----------------------------------------------------------------------------
 * Component: Checkbox
 * -------------------------------------------------------------------------- */

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive>;

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive>,
  CheckboxProps
>((props, forwardedRef) => (
  <CheckboxPrimitive ref={forwardedRef} {...props}>
    <CheckboxIndicator>
      {props.checked === 'indeterminate' ? (
        <MinusIcon className="h-3 w-3" />
      ) : (
        <CheckIcon className="h-3 w-3" />
      )}
    </CheckboxIndicator>
  </CheckboxPrimitive>
));

Checkbox.displayName = CheckboxPrimitive.displayName;
