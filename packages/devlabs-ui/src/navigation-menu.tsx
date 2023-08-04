'use client';

import { ChevronDownIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import {
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuIndicator,
  NavigationMenuList,
  NavigationMenuSub as NavigationMenuPrimitiveSub,
  NavigationMenuTrigger as NavigationMenuTriggerPrimitive,
  NavigationMenuViewport,
} from './core/navigation-menu';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/navigation-menu';

/* -----------------------------------------------------------------------------
 * Component: NavigationMenu
 * -------------------------------------------------------------------------- */

export type NavigationMenuProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive
>;

export const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive>,
  NavigationMenuProps
>(({ children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitive ref={forwardedRef} {...props}>
    <Fragment>
      <NavigationMenuList>
        {children}

        <NavigationMenuIndicator>
          <div className="rounded-tl-0.5 top-1.75 relative h-2.5 w-2.5 rotate-45 bg-white" />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenuViewport />
      </div>
    </Fragment>
  </NavigationMenuPrimitive>
));

NavigationMenu.displayName = NavigationMenuPrimitive.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuSub
 * -------------------------------------------------------------------------- */

export type NavigationMenuSubProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitiveSub
>;

export const NavigationMenuSub = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveSub>,
  NavigationMenuSubProps
>(({ children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitiveSub ref={forwardedRef} {...props}>
    <Fragment>
      <NavigationMenuList>
        {children}

        <NavigationMenuIndicator>
          <div className="top-1.75 bg-border relative h-2.5 w-2.5 rotate-45 rounded-tl-sm shadow-lg" />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenuViewport />
      </div>
    </Fragment>
  </NavigationMenuPrimitiveSub>
));

NavigationMenuSub.displayName = NavigationMenuPrimitiveSub.displayName;

/* -----------------------------------------------------------------------------
 * Component: NavigationMenuTrigger
 * -------------------------------------------------------------------------- */

export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof NavigationMenuTriggerPrimitive>
>(({ children, ...props }, forwardedRef) => (
  <NavigationMenuTriggerPrimitive ref={forwardedRef} {...props}>
    <Fragment>
      {children}

      <ChevronDownIcon className="group-data-state-open:rotate-180 text-primary h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]" />
    </Fragment>
  </NavigationMenuTriggerPrimitive>
));

NavigationMenuTrigger.displayName = NavigationMenuTriggerPrimitive.displayName;
