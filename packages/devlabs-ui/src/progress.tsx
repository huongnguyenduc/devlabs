'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import {
  Progress as ProgressPrimitive,
  ProgressIndicator,
} from './core/progress';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/progress';

/* -----------------------------------------------------------------------------
 * Component: Progress
 * -------------------------------------------------------------------------- */

export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive>
>((props, forwardedRef) => (
  <ProgressPrimitive ref={forwardedRef} {...props}>
    <ProgressIndicator
      style={{ transform: `translateX(-${100 - (props.value || 0)}%)` }}
    />
  </ProgressPrimitive>
));

Progress.displayName = 'Progress';
