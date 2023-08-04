import {
  Action,
  Close,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from '@radix-ui/react-toast';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Toast
 * -------------------------------------------------------------------------- */

export const ToastProvider = Provider;

/* -----------------------------------------------------------------------------
 * Component: ToastViewport
 * -------------------------------------------------------------------------- */

export const toastViewportVariants = cva(
  [
    'fixed z-50 flex gap-2.5',
    'p-[var(--viewport-padding)] [--viewport-padding:1rem]',
  ],
  {
    variants: {
      size: {
        auto: 'w-auto',
        xs: 'w-xs' /* 320px */,
        sm: 'w-sm' /* 384px */,
        md: 'w-md' /* 448px */,
        lg: 'w-lg' /* 512px */,
        xl: 'w-xl' /* 576px */,
        '2xl': 'w-2xl' /* 672px */,
        '3xl': 'w-3xl' /* 768px */,
        '4xl': 'w-4xl' /* 896px */,
        '5xl': 'w-5xl' /* 1024px */,
        '6xl': 'w-6xl' /* 1152px */,
        '7xl': 'w-7xl' /* 1280px */,
      },
      position: {
        'top-left': 'left-0 top-0 flex-col-reverse',
        'top-right': 'right-0 top-0 flex-col-reverse',
        'top-center': 'left-1/2 top-0 -translate-x-1/2 flex-col-reverse',
        'bottom-left': 'bottom-0 left-0 flex-col',
        'bottom-right': 'bottom-0 right-0 flex-col',
        'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 flex-col',
      },
    },
    defaultVariants: {
      size: 'auto',
      position: 'bottom-right',
    },
  },
);

export type ToastViewportProps = ComponentPropsWithoutRef<typeof Viewport> &
  VariantProps<typeof toastViewportVariants>;

export const ToastViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ToastViewportProps
>(
  (
    { className, size = 'auto', position = 'bottom-right', ...props },
    forwardedRef,
  ) => (
    <Viewport
      ref={forwardedRef}
      className={twMerge(toastViewportVariants({ className, size, position }))}
      {...props}
    />
  ),
);

ToastViewport.displayName = Viewport.displayName;

/* -----------------------------------------------------------------------------
 * Component: Toast
 * -------------------------------------------------------------------------- */

export const toastVariants = cva(
  [
    'group relative rounded-md border p-4',
    'data-swipe-cancel:transition-transform',
    [
      'data-state-open:data-swipe-direction-right:animate-slide-in-right data-state-closed:data-swipe-direction-right:animate-slide-out-right',
      'data-swipe-move:data-swipe-direction-right:translate-x-[var(--radix-toast-swipe-move-x)] data-swipe-end:data-swipe-direction-right:animate-swipe-out-right',
      'data-swipe-cancel:translate-x-0',
    ],
    [
      'data-state-open:data-swipe-direction-left:animate-slide-in-left data-state-closed:data-swipe-direction-left:animate-slide-out-left',
      'data-swipe-move:data-swipe-direction-left:translate-x-[var(--radix-toast-swipe-move-x)] data-swipe-end:data-swipe-direction-left:animate-swipe-out-left',
      'data-swipe-cancel:translate-x-0',
    ],
    [
      'data-state-open:data-swipe-direction-up:animate-slide-in-up data-state-closed:data-swipe-direction-up:animate-slide-out-up',
      'data-swipe-move:data-swipe-direction-up:translate-y-[var(--radix-toast-swipe-move-y)] data-swipe-end:data-swipe-direction-up:animate-swipe-out-up',
      'data-swipe-cancel:translate-y-0',
    ],
    [
      'data-state-open:data-swipe-direction-down:animate-slide-in-down data-state-closed:data-swipe-direction-down:animate-slide-out-down',
      'data-swipe-move:data-swipe-direction-down:translate-y-[var(--radix-toast-swipe-move-y)] data-swipe-end:data-swipe-direction-down:animate-swipe-out-down',
      'data-swipe-cancel:translate-y-0',
    ],
  ],
  {
    variants: {
      variant: {
        primary: 'border-primary bg-background text-primary',
        error: 'border-destructive bg-destructive text-white',
        success: 'border-sky-500 bg-sky-500 text-white',
        warning: 'border-orange-500 bg-orange-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type ToastProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof toastVariants>;

export const Toast = forwardRef<ElementRef<typeof Root>, ToastProps>(
  ({ className, variant, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(toastVariants({ className, variant }))}
      {...props}
    />
  ),
);

Toast.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToastTitle
 * -------------------------------------------------------------------------- */

export const toastTitleVariants = cva('font-medium');

export type ToastTitleProps = ComponentPropsWithoutRef<typeof Title> &
  VariantProps<typeof toastTitleVariants>;

export const ToastTitle = forwardRef<ElementRef<typeof Title>, ToastTitleProps>(
  ({ className, ...props }, forwardedRef) => (
    <Title
      ref={forwardedRef}
      className={twMerge(toastTitleVariants({ className }))}
      {...props}
    />
  ),
);

ToastTitle.displayName = Title.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToastDescription
 * -------------------------------------------------------------------------- */

export const toastDescriptionVariants = cva('text-sm');

export type ToastDescriptionProps = ComponentPropsWithoutRef<
  typeof Description
> &
  VariantProps<typeof toastDescriptionVariants>;

export const ToastDescription = forwardRef<
  ElementRef<typeof Description>,
  ToastDescriptionProps
>(({ className, ...props }, forwardedRef) => (
  <Description
    ref={forwardedRef}
    className={twMerge(toastDescriptionVariants({ className }))}
    {...props}
  />
));

ToastDescription.displayName = Description.displayName;

/* -----------------------------------------------------------------------------
 * Component: ToastAction
 * -------------------------------------------------------------------------- */

export const ToastAction = Action;

/* -----------------------------------------------------------------------------
 * Component: ToastClose
 * -------------------------------------------------------------------------- */

export const ToastClose = Close;
