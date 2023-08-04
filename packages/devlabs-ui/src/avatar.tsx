'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import {
  Avatar as AvatarPrimitive,
  AvatarFallback,
  AvatarImage,
} from './core/avatar';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/avatar';

/* -----------------------------------------------------------------------------
 * Component: Avatar
 * -------------------------------------------------------------------------- */

export type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive> & {
  alt?: string;
  fallback?: string;
  src?: string;
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ alt, fallback, src, ...props }, forwardedRef) => (
    <AvatarPrimitive ref={forwardedRef} {...props}>
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive>
  ),
);

Avatar.displayName = 'Avatar';
