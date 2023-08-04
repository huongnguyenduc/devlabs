'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
  useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './core/button';
import {
  DialogClose,
  DialogContent as DialogPrimitiveContent,
  DialogContext,
  DialogOverlay as DialogPrimitiveOverlay,
  DialogPortal,
} from './core/dialog';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/dialog';

/* -----------------------------------------------------------------------------
 * Component: DialogOverlay
 * -------------------------------------------------------------------------- */

export const dialogOverlayVariants = cva('p-4 sm:p-10', {
  variants: {
    scrollable: {
      true: 'flex items-center justify-center',
      false: 'grid place-items-center overflow-auto',
    },
  },
  defaultVariants: {
    scrollable: false,
  },
});

export type DialogOverlayProps = ComponentPropsWithoutRef<
  typeof DialogPrimitiveOverlay
> &
  Omit<VariantProps<typeof dialogOverlayVariants>, 'scrollable'>;

export const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitiveOverlay>,
  DialogOverlayProps
>(({ className, ...props }, forwardedRef) => {
  const { scrollable } = useContext(DialogContext);

  return (
    <DialogPrimitiveOverlay
      ref={forwardedRef}
      className={twMerge(dialogOverlayVariants({ className, scrollable }))}
      {...props}
    />
  );
});

DialogOverlay.displayName = DialogPrimitiveOverlay.displayName;

/* -----------------------------------------------------------------------------
 * Component: DialogContent
 * -------------------------------------------------------------------------- */

export const dialogContentVariants = cva(
  [
    'rounded-lg',
    'data-state-open:animate-content-show data-state-closed:animate-content-hide',
  ],
  {
    variants: {
      scrollable: {
        true: 'flex max-h-full flex-col overflow-hidden',
      },
    },
    defaultVariants: {
      scrollable: false,
    },
  },
);

export type DialogContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitiveContent
> &
  Omit<VariantProps<typeof dialogContentVariants>, 'scrollable'>;

export const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitiveContent>,
  DialogContentProps
>(({ children, className, ...props }, forwardedRef) => {
  const { variant, scrollable } = useContext(DialogContext);

  return (
    <DialogPortal>
      <DialogOverlay>
        <DialogPrimitiveContent
          ref={forwardedRef}
          className={twMerge(dialogContentVariants({ className, scrollable }))}
          {...props}
        >
          <Fragment>
            {children}
            {variant === 'default' && (
              <DialogClose
                aria-label="Close"
                className={twMerge(
                  buttonVariants({
                    className: 'absolute right-4 top-3.5',
                    shape: 'pill',
                    size: 'sm',
                    variant: 'ghost',
                    icon: true,
                  }),
                )}
              >
                <XIcon className="h-4 w-4" />
              </DialogClose>
            )}
          </Fragment>
        </DialogPrimitiveContent>
      </DialogOverlay>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitiveContent.displayName;
