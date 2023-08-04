'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Switch as SwitchPrimitive, SwitchThumb } from './core/switch';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/switch';

/* -----------------------------------------------------------------------------
 * Component: Switch
 * -------------------------------------------------------------------------- */

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive>;

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitive>,
  SwitchProps
>((props, forwardedRef) => (
  <SwitchPrimitive ref={forwardedRef} {...props}>
    <SwitchThumb />
  </SwitchPrimitive>
));

Switch.displayName = SwitchPrimitive.displayName;
