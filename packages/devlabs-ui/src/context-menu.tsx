'use client';

import { CheckIcon, ChevronRightIcon, DotIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import {
  ContextMenuCheckboxItem as ContextMenuPrimitiveCheckboxItem,
  ContextMenuContent as ContextMenuPrimitiveContent,
  ContextMenuItem as ContextMenuPrimitiveItem,
  ContextMenuItemIndicator,
  ContextMenuPortal,
  ContextMenuRadioItem as ContextMenuPrimitiveRadioItem,
  ContextMenuShortcut,
  ContextMenuSubContent as ContextMenuPrimitiveSubContent,
  ContextMenuSubTrigger as ContextMenuPrimitiveSubTrigger,
} from './core/context-menu';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/context-menu';

/* -----------------------------------------------------------------------------
 * Component: ContextMenuContent
 * -------------------------------------------------------------------------- */

export type ContextMenuContentProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitiveContent
>;

export const ContextMenuContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitiveContent>,
  ContextMenuContentProps
>((props, forwardedRef) => (
  <ContextMenuPortal>
    <ContextMenuPrimitiveContent ref={forwardedRef} {...props} />
  </ContextMenuPortal>
));

ContextMenuContent.displayName = ContextMenuPrimitiveContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuSubContent
 * -------------------------------------------------------------------------- */

export type ContextMenuSubContentProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitiveSubContent
>;

export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitiveSubContent>,
  ContextMenuSubContentProps
>((props, forwardedRef) => (
  <ContextMenuPortal>
    <ContextMenuPrimitiveSubContent
      ref={forwardedRef}
      sideOffset={2}
      {...props}
    />
  </ContextMenuPortal>
));

ContextMenuSubContent.displayName = ContextMenuPrimitiveSubContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuSubTrigger
 * -------------------------------------------------------------------------- */

export type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitiveSubTrigger
>;

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof ContextMenuPrimitiveSubTrigger>,
  ContextMenuSubTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <ContextMenuPrimitiveSubTrigger ref={forwardedRef} {...props}>
    <Fragment>
      {children}
      <ContextMenuShortcut>
        <ChevronRightIcon className="text-accent-foreground h-4 w-4" />
      </ContextMenuShortcut>
    </Fragment>
  </ContextMenuPrimitiveSubTrigger>
));

ContextMenuSubTrigger.displayName = ContextMenuPrimitiveSubTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuItem
 * -------------------------------------------------------------------------- */

export type ContextMenuItemProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitiveItem
> & {
  shortcut?: string;
};

export const ContextMenuItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitiveItem>,
  ContextMenuItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <ContextMenuPrimitiveItem ref={forwardedRef} {...props}>
    {props.asChild ? (
      children
    ) : (
      <Fragment>
        {children}
        {shortcut && <ContextMenuShortcut>{shortcut}</ContextMenuShortcut>}
      </Fragment>
    )}
  </ContextMenuPrimitiveItem>
));

ContextMenuItem.displayName = ContextMenuPrimitiveItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuCheckboxItem
 * -------------------------------------------------------------------------- */

export type ContextMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitiveCheckboxItem
> & {
  shortcut?: string;
};

export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitiveCheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <ContextMenuPrimitiveCheckboxItem ref={forwardedRef} {...props}>
    <Fragment>
      <ContextMenuItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ContextMenuItemIndicator>
      {children}
      {shortcut && <ContextMenuShortcut>{shortcut}</ContextMenuShortcut>}
    </Fragment>
  </ContextMenuPrimitiveCheckboxItem>
));

ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitiveCheckboxItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: ContextMenuRadioItem
 * -------------------------------------------------------------------------- */

export type ContextMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitiveRadioItem
> & {
  shortcut?: string;
};

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitiveRadioItem>,
  ContextMenuRadioItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <ContextMenuPrimitiveRadioItem ref={forwardedRef} {...props}>
    <Fragment>
      <ContextMenuItemIndicator>
        <DotIcon className="h-4 w-4" />
      </ContextMenuItemIndicator>
      {children}
      {shortcut && <ContextMenuShortcut>{shortcut}</ContextMenuShortcut>}
    </Fragment>
  </ContextMenuPrimitiveRadioItem>
));

ContextMenuRadioItem.displayName = ContextMenuPrimitiveRadioItem.displayName;
