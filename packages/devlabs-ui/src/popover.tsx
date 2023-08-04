'use client';

import { XIcon } from 'lucide-react';
import { ElementRef, forwardRef, Fragment, useContext } from 'react';
import { Button } from './button';
import {
  PopoverClose,
  PopoverContent as PopoverPrimitiveContent,
  PopoverContentProps,
  PopoverContext,
  PopoverPortal,
} from './core/popover';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/popover';

/* -----------------------------------------------------------------------------
 * Component: PopoverContent
 * -------------------------------------------------------------------------- */

export const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitiveContent>,
  PopoverContentProps
>(({ children, ...props }, forwardedRef) => {
  const { variant } = useContext(PopoverContext);

  return (
    <PopoverPortal>
      <PopoverPrimitiveContent ref={forwardedRef} sideOffset={5} {...props}>
        <Fragment>
          {children}

          {variant === 'default' && (
            <PopoverClose
              asChild
              aria-label="Close"
              className="absolute right-2.5 top-2.5"
            >
              <Button shape="pill" startIcon={XIcon} variant="ghost" />
            </PopoverClose>
          )}
        </Fragment>
      </PopoverPrimitiveContent>
    </PopoverPortal>
  );
});

PopoverContent.displayName = PopoverPrimitiveContent.displayName;
