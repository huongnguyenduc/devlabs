import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Sub,
  Trigger,
  Viewport,
} from '@radix-ui/react-navigation-menu';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: NavigationMenu
 * -------------------------------------------------------------------------- */

export const navigationMenuVariants = cva('relative');

export type NavigationMenuProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof navigationMenuVariants>;

export const NavigationMenu = forwardRef<
  ElementRef<typeof Root>,
  NavigationMenuProps
>(({ className, ...props }, forwardedRef) => (
  <Root
    ref={forwardedRef}
    className={twMerge(navigationMenuVariants({ className }))}
    {...props}
  />
));

NavigationMenu.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuSub
 * -------------------------------------------------------------------------- */

export const navigationMenuSubVariants = cva('relative');

export type NavigationMenuSubProps = ComponentPropsWithoutRef<typeof Sub> &
  VariantProps<typeof navigationMenuSubVariants>;

export const NavigationMenuSub = forwardRef<
  ElementRef<typeof Sub>,
  NavigationMenuSubProps
>(({ className, ...props }, forwardedRef) => (
  <Sub
    ref={forwardedRef}
    className={twMerge(navigationMenuSubVariants({ className }))}
    {...props}
  />
));

NavigationMenuSub.displayName = Sub.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuList
 * -------------------------------------------------------------------------- */

export const navigationMenuListVariants = cva(
  'group flex flex-1 list-none items-center justify-center gap-1',
);

export type NavigationMenuListProps = ComponentPropsWithoutRef<typeof List> &
  VariantProps<typeof navigationMenuListVariants>;

export const NavigationMenuList = forwardRef<
  ElementRef<typeof List>,
  NavigationMenuListProps
>(({ className, ...props }, forwardedRef) => (
  <List
    ref={forwardedRef}
    className={twMerge(navigationMenuListVariants({ className }))}
    {...props}
  />
));

NavigationMenuList.displayName = List.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuItem
 * -------------------------------------------------------------------------- */

export const NavigationMenuItem = Item;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuTrigger
 * -------------------------------------------------------------------------- */

export const navigationMenuTriggerVariants = cva([
  'bg-background group inline-flex h-10 w-max items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors',
  'hover:bg-accent hover:text-accent-foreground',
  'focus:bg-accent focus:text-accent-foreground focus:outline-none',
  'disabled:pointer-events-none disabled:opacity-50',
  'data-state-open:bg-accent/50 data-active:bg-accent/50',
]);

export type NavigationMenuTriggerProps = ComponentPropsWithoutRef<
  typeof Trigger
> &
  VariantProps<typeof navigationMenuTriggerVariants>;

export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  NavigationMenuTriggerProps
>(({ className, ...props }, forwardedRef) => (
  <Trigger
    ref={forwardedRef}
    {...props}
    className={twMerge(navigationMenuTriggerVariants({ className }))}
  />
));

NavigationMenuTrigger.displayName = Trigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuLink
 * -------------------------------------------------------------------------- */

export const NavigationMenuLink = Link;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuIndicator
 * -------------------------------------------------------------------------- */

export const navigationMenuIndicatorVariants = cva([
  'top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]',
  'data-state-visible:animate-fade-in data-state-hidden:animate-fade-out',
]);

export type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<
  typeof Indicator
> &
  VariantProps<typeof navigationMenuIndicatorVariants>;

export const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  NavigationMenuIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <Indicator
    ref={forwardedRef}
    {...props}
    className={twMerge(navigationMenuIndicatorVariants({ className }))}
  />
));

NavigationMenuIndicator.displayName = Indicator.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuContent
 * -------------------------------------------------------------------------- */

export const navigationMenuContentVariants = cva([
  'absolute left-0 top-0 w-full',
  'sm:w-auto',
  'data-motion-from-start:animate-enter-from-left data-motion-to-start:animate-exit-to-left',
  'data-motion-from-end:animate-enter-from-right data-motion-to-end:animate-exit-to-right',
]);

export type NavigationMenuContentProps = ComponentPropsWithoutRef<
  typeof Content
> &
  VariantProps<typeof navigationMenuContentVariants>;

export const NavigationMenuContent = forwardRef<
  ElementRef<typeof Content>,
  NavigationMenuContentProps
>(({ className, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    {...props}
    className={twMerge(navigationMenuContentVariants({ className }))}
  />
));

NavigationMenuContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuViewport
 * -------------------------------------------------------------------------- */

export const navigationMenuViewportVariants = cva([
  'origin-top-center bg-popover text-popover-foreground relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md drop-shadow transition-[width,height] duration-300',
  'sm:w-[var(--radix-navigation-menu-viewport-width)]',
  'data-state-open:animate-scale-in data-state-closed:animate-scale-out',
]);

export type NavigationMenuViewportProps = ComponentPropsWithoutRef<
  typeof Viewport
> &
  VariantProps<typeof navigationMenuViewportVariants>;

export const NavigationMenuViewport = forwardRef<
  ElementRef<typeof Viewport>,
  NavigationMenuViewportProps
>(({ className, ...props }, forwardedRef) => (
  <Viewport
    ref={forwardedRef}
    {...props}
    className={twMerge(navigationMenuViewportVariants({ className }))}
  />
));

NavigationMenuViewport.displayName = Viewport.displayName;
