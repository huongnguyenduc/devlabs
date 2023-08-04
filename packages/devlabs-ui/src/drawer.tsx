'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  FC,
  forwardRef,
  Fragment,
  useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './core/button';
import {
  Dialog,
  DialogClose as DrawerClose,
  DialogContent as DrawerPrimitiveContent,
  DialogContext,
  DialogOverlay as DrawerPrimitiveOverlay,
  DialogPortal as DrawerPortal,
} from './core/dialog';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export {
  DialogBody as DrawerBody,
  DialogClose as DrawerClose,
  DialogContent as DrawerPrimitiveContent,
  DialogDescription as DrawerDescription,
  DialogFooter as DrawerFooter,
  DialogHeader as DrawerHeader,
  DialogOverlay as DrawerPrimitiveOverlay,
  DialogPortal as DrawerPortal,
  DialogTitle as DrawerTitle,
  DialogTrigger as DrawerTrigger,
} from './core/dialog';

/* -----------------------------------------------------------------------------
 * Provider: DrawerContext
 * -------------------------------------------------------------------------- */

export type DrawerContextValue = Pick<DrawerProps, 'position'>;

export const DrawerContext = createContext<DrawerContextValue>(
  {} as DrawerContextValue,
);

/* -----------------------------------------------------------------------------
 * Component: Drawer
 * -------------------------------------------------------------------------- */

export type DrawerProps = ComponentProps<typeof Dialog> & {
  position?: 'left' | 'right';
};

export const Drawer: FC<DrawerProps> = ({ position = 'right', ...props }) => (
  <DrawerContext.Provider value={{ position }}>
    <Dialog {...props} />
  </DrawerContext.Provider>
);

/* -----------------------------------------------------------------------------
 * Component: DrawerOverlay
 * -------------------------------------------------------------------------- */

export const drawerOverlayVariants = cva('flex', {
  variants: {
    position: {
      left: 'justify-start',
      right: 'justify-end',
    },
  },
  defaultVariants: {
    position: 'right',
  },
});

export type DrawerOverlayProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitiveOverlay
> &
  Omit<VariantProps<typeof drawerOverlayVariants>, 'position' | 'scrollable'>;

export const DrawerOverlay = forwardRef<
  ElementRef<typeof DrawerPrimitiveOverlay>,
  DrawerOverlayProps
>(({ className, ...props }, forwardedRef) => {
  const { position } = useContext(DrawerContext);

  return (
    <DrawerPrimitiveOverlay
      ref={forwardedRef}
      className={twMerge(drawerOverlayVariants({ className, position }))}
      {...props}
    />
  );
});

DrawerOverlay.displayName = 'DrawerOverlay';

/* -----------------------------------------------------------------------------
 * Component: DrawerContent
 * -------------------------------------------------------------------------- */

export const drawerContentVariants = cva('', {
  variants: {
    scrollable: {
      true: 'flex flex-col',
      false: 'overflow-y-auto',
    },
    position: {
      left: [
        'border-y-0 border-l-0',
        'data-state-open:animate-drawer-show-from-left data-state-closed:animate-drawer-hide-to-left',
      ],
      right: [
        'border-y-0 border-r-0',
        'data-state-open:animate-drawer-show-from-right data-state-closed:animate-drawer-hide-to-right',
      ],
    },
  },
  defaultVariants: {
    scrollable: false,
    position: 'right',
  },
});

export type DrawerContentProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitiveContent
> &
  Omit<VariantProps<typeof drawerContentVariants>, 'position' | 'scrollable'>;

export const DrawerContent = forwardRef<
  ElementRef<typeof DrawerPrimitiveContent>,
  DrawerContentProps
>(({ children, className, ...props }, forwardedRef) => {
  const { position } = useContext(DrawerContext);
  const { variant, scrollable } = useContext(DialogContext);

  return (
    <DrawerPortal>
      <DrawerOverlay>
        <DrawerPrimitiveContent
          ref={forwardedRef}
          className={twMerge(
            drawerContentVariants({ className, position, scrollable }),
          )}
          {...props}
        >
          <Fragment>
            {children}
            {variant === 'default' && (
              <DrawerClose
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
              </DrawerClose>
            )}
          </Fragment>
        </DrawerPrimitiveContent>
      </DrawerOverlay>
    </DrawerPortal>
  );
});

DrawerContent.displayName = 'DrawerContent';
