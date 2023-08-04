'use client';

import { CheckIcon, ChevronRightIcon, DotIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import {
  MenubarCheckboxItem as MenubarPrimitiveCheckboxItem,
  MenubarContent as MenubarPrimitiveContent,
  MenubarItem as MenubarPrimitiveItem,
  MenubarItemIndicator,
  MenubarPortal,
  MenubarRadioItem as MenubarPrimitiveRadioItem,
  MenubarShortcut,
  MenubarSubContent as MenubarPrimitiveSubContent,
  MenubarSubTrigger as MenubarPrimitiveSubTrigger,
} from './core/menubar';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/menubar';

/* -----------------------------------------------------------------------------
 * Component: MenubarContent
 * -------------------------------------------------------------------------- */

export type MenubarContentProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitiveContent
>;

export const MenubarContent = forwardRef<
  ElementRef<typeof MenubarPrimitiveContent>,
  MenubarContentProps
>((props, forwardedRef) => (
  <MenubarPortal>
    <MenubarPrimitiveContent ref={forwardedRef} sideOffset={8} {...props} />
  </MenubarPortal>
));

MenubarContent.displayName = MenubarPrimitiveContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarSubContent
 * -------------------------------------------------------------------------- */

export type MenubarSubContentProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitiveSubContent
>;

export const MenubarSubContent = forwardRef<
  ElementRef<typeof MenubarPrimitiveSubContent>,
  MenubarSubContentProps
>((props, forwardedRef) => (
  <MenubarPortal>
    <MenubarPrimitiveSubContent ref={forwardedRef} {...props} />
  </MenubarPortal>
));

MenubarSubContent.displayName = MenubarPrimitiveSubContent.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarSubTrigger
 * -------------------------------------------------------------------------- */

export type MenubarSubTriggerProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitiveSubTrigger
>;

export const MenubarSubTrigger = forwardRef<
  ElementRef<typeof MenubarPrimitiveSubTrigger>,
  MenubarSubTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <MenubarPrimitiveSubTrigger ref={forwardedRef} {...props}>
    <Fragment>
      {children}
      <MenubarShortcut>
        <ChevronRightIcon className="text-accent-foreground h-4 w-4" />
      </MenubarShortcut>
    </Fragment>
  </MenubarPrimitiveSubTrigger>
));

MenubarSubTrigger.displayName = MenubarPrimitiveSubTrigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarItem
 * -------------------------------------------------------------------------- */

export type MenubarItemProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitiveItem
> & {
  shortcut?: string;
};

export const MenubarItem = forwardRef<
  ElementRef<typeof MenubarPrimitiveItem>,
  MenubarItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <MenubarPrimitiveItem ref={forwardedRef} {...props}>
    {props.asChild ? (
      children
    ) : (
      <Fragment>
        {children}
        {shortcut && <MenubarShortcut>{shortcut}</MenubarShortcut>}
      </Fragment>
    )}
  </MenubarPrimitiveItem>
));

MenubarItem.displayName = MenubarPrimitiveItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarCheckboxItem
 * -------------------------------------------------------------------------- */

export type MenubarCheckboxItemProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitiveCheckboxItem
> & {
  shortcut?: string;
};

export const MenubarCheckboxItem = forwardRef<
  ElementRef<typeof MenubarPrimitiveCheckboxItem>,
  MenubarCheckboxItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <MenubarPrimitiveCheckboxItem ref={forwardedRef} {...props}>
    <Fragment>
      <MenubarItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </MenubarItemIndicator>
      {children}
      {shortcut && <MenubarShortcut>{shortcut}</MenubarShortcut>}
    </Fragment>
  </MenubarPrimitiveCheckboxItem>
));

MenubarCheckboxItem.displayName = MenubarPrimitiveCheckboxItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: MenubarRadioItem
 * -------------------------------------------------------------------------- */

export type MenubarRadioItemProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitiveRadioItem
> & {
  shortcut?: string;
};

export const MenubarRadioItem = forwardRef<
  ElementRef<typeof MenubarPrimitiveRadioItem>,
  MenubarRadioItemProps
>(({ children, shortcut, ...props }, forwardedRef) => (
  <MenubarPrimitiveRadioItem ref={forwardedRef} {...props}>
    <Fragment>
      <MenubarItemIndicator>
        <DotIcon className="h-4 w-4" />
      </MenubarItemIndicator>
      {children}
      {shortcut && <MenubarShortcut>{shortcut}</MenubarShortcut>}
    </Fragment>
  </MenubarPrimitiveRadioItem>
));

MenubarRadioItem.displayName = MenubarPrimitiveRadioItem.displayName;
