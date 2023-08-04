'use client';

import { CheckIcon, ChevronRightIcon, DotIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import {
  DropdownMenuCheckboxItem as DropdownMenuPrimitiveCheckboxItem,
  DropdownMenuContent as DropdownMenuPrimitiveContent,
  DropdownMenuItem as DropdownMenuPrimitiveItem,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRadioItem as DropdownMenuPrimitiveRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSubContent as DropdownMenuPrimitiveSubContent,
  DropdownMenuSubTrigger as DropdownMenuPrimitiveSubTrigger,
} from './core/dropdown-menu';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/dropdown-menu';

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuContent
 * -------------------------------------------------------------------------- */

export type DropdownMenuContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitiveContent
>;

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitiveContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPortal>
    <DropdownMenuPrimitiveContent
      ref={forwardedRef}
      sideOffset={5}
      {...props}
    />
  </DropdownMenuPortal>
));

DropdownMenuContent.displayName = DropdownMenuPrimitiveContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuSubContent
 * -------------------------------------------------------------------------- */

export type DropdownMenuSubContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitiveSubContent
>;

export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitiveSubContent>,
  DropdownMenuSubContentProps
>((props, forwardedRef) => (
  <DropdownMenuPortal>
    <DropdownMenuPrimitiveSubContent
      ref={forwardedRef}
      sideOffset={2}
      {...props}
    />
  </DropdownMenuPortal>
));

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitiveSubContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuSubTrigger
 * -------------------------------------------------------------------------- */

export type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitiveSubTrigger
>;

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitiveSubTrigger>,
  DropdownMenuSubTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitiveSubTrigger ref={forwardedRef} {...props}>
    <Fragment>
      {children}
      <DropdownMenuShortcut>
        <ChevronRightIcon className="text-accent-foreground h-4 w-4" />
      </DropdownMenuShortcut>
    </Fragment>
  </DropdownMenuPrimitiveSubTrigger>
));

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitiveSubTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuItem
 * -------------------------------------------------------------------------- */

export type DropdownMenuItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitiveItem
> & {
  shortcut?: string;
};

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitiveItem>,
  DropdownMenuItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <DropdownMenuPrimitiveItem ref={forwardedRef} {...props}>
    {props.asChild ? (
      children
    ) : (
      <Fragment>
        {children}
        {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
      </Fragment>
    )}
  </DropdownMenuPrimitiveItem>
));

DropdownMenuItem.displayName = DropdownMenuPrimitiveItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuCheckboxItem
 * -------------------------------------------------------------------------- */

export type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitiveCheckboxItem
> & {
  shortcut?: string;
};

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitiveCheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <DropdownMenuPrimitiveCheckboxItem ref={forwardedRef} {...props}>
    <Fragment>
      <DropdownMenuItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuItemIndicator>
      {children}
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </Fragment>
  </DropdownMenuPrimitiveCheckboxItem>
));

DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitiveCheckboxItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: DropdownMenuRadioItem
 * -------------------------------------------------------------------------- */

export type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitiveRadioItem
> & {
  shortcut?: string;
};

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitiveRadioItem>,
  DropdownMenuRadioItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <DropdownMenuPrimitiveRadioItem ref={forwardedRef} {...props}>
    <Fragment>
      <DropdownMenuItemIndicator>
        <DotIcon className="h-4 w-4" />
      </DropdownMenuItemIndicator>
      {children}
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </Fragment>
  </DropdownMenuPrimitiveRadioItem>
));

DropdownMenuRadioItem.displayName = DropdownMenuPrimitiveRadioItem.displayName;
