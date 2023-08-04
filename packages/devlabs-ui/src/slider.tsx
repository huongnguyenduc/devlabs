'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import {
  Slider as SliderPrimitive,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from './core/slider';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/slider';

/* -----------------------------------------------------------------------------
 * Component: Slider
 * -------------------------------------------------------------------------- */

export type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive>;

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive>,
  SliderProps
>((props, forwardedRef) => (
  <SliderPrimitive ref={forwardedRef} {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderPrimitive>
));

Slider.displayName = SliderPrimitive.displayName;
