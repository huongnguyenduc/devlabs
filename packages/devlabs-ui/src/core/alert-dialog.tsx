import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-alert-dialog';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  FC,
  forwardRef,
  HTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './button';

/* -----------------------------------------------------------------------------
 * Provider: AlertDialogContext
 * -------------------------------------------------------------------------- */

export type AlertDialogContextValue = Pick<AlertDialogProps, 'scrollable'>;

export const AlertDialogContext = createContext<AlertDialogContextValue>(
  {} as AlertDialogContextValue,
);

/* -----------------------------------------------------------------------------
 * Component: AlertDialog
 * -------------------------------------------------------------------------- */

export type AlertDialogProps = ComponentProps<typeof Root> & {
  scrollable?: boolean;
};

export const AlertDialog: FC<AlertDialogProps> = ({
  scrollable = false,
  ...props
}) => (
  <AlertDialogContext.Provider value={{ scrollable }}>
    <Root {...props} />
  </AlertDialogContext.Provider>
);

/* -----------------------------------------------------------------------------
 * Component: AlertDialogTrigger
 * -------------------------------------------------------------------------- */

export const AlertDialogTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogPortal
 * -------------------------------------------------------------------------- */

export const AlertDialogPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogOverlay
 * -------------------------------------------------------------------------- */

export const alertDialogOverlayVariants = cva([
  'bg-background/80 fixed inset-0 z-20',
  'data-state-open:animate-overlay-show data-state-closed:animate-overlay-hide',
]);

export type AlertDialogOverlayProps = ComponentPropsWithoutRef<typeof Overlay> &
  VariantProps<typeof alertDialogOverlayVariants>;

export const AlertDialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, forwardedRef) => (
  <Overlay
    ref={forwardedRef}
    className={twMerge(alertDialogOverlayVariants({ className }))}
    {...props}
  />
));

AlertDialogOverlay.displayName = Overlay.displayName;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogContent
 * -------------------------------------------------------------------------- */

export const alertDialogContentVariants = cva(
  [
    'bg-background relative rounded-lg border shadow-lg focus:outline-none',
    'data-state-open:animate-content-show data-state-closed:animate-content-hide',
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
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type AlertDialogContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof alertDialogContentVariants>;

export const AlertDialogContent = forwardRef<
  ElementRef<typeof Content>,
  AlertDialogContentProps
>(({ className, size, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    {...props}
    className={twMerge(alertDialogContentVariants({ className, size }))}
  />
));

AlertDialogContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogAction
 * -------------------------------------------------------------------------- */

export const AlertDialogAction = forwardRef<
  ElementRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, forwardedRef) => (
  <Action
    ref={forwardedRef}
    className={twMerge(buttonVariants({ className, variant: 'destructive' }))}
    {...props}
  />
));

AlertDialogAction.displayName = Action.displayName;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogCancel
 * -------------------------------------------------------------------------- */

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof Cancel>,
  ComponentPropsWithoutRef<typeof Cancel>
>(({ className, ...props }, forwardedRef) => (
  <Cancel
    ref={forwardedRef}
    {...props}
    className={twMerge(buttonVariants({ className, variant: 'outline' }))}
  />
));

AlertDialogCancel.displayName = Cancel.displayName;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogHeader
 * -------------------------------------------------------------------------- */

export const alertDialogHeaderVariants = cva(
  'grid shrink-0 gap-2 border-b px-6 py-4',
);

export type AlertDialogHeaderProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof alertDialogHeaderVariants>;

export const AlertDialogHeader: FC<AlertDialogHeaderProps> = ({
  className,
  ...props
}) => (
  <header
    className={twMerge(alertDialogHeaderVariants({ className }))}
    {...props}
  />
);

/* -----------------------------------------------------------------------------
 * Component: AlertDialogBody
 * -------------------------------------------------------------------------- */

export const alertDialogBodyVariants = cva('grow overflow-y-auto');

export type AlertDialogBodyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof alertDialogBodyVariants>;

export const AlertDialogBody: FC<AlertDialogBodyProps> = ({
  className,
  ...props
}) => (
  <main
    className={twMerge(alertDialogBodyVariants({ className }))}
    {...props}
  />
);

/* -----------------------------------------------------------------------------
 * Component: AlertDialogFooter
 * -------------------------------------------------------------------------- */

export const alertDialogFooterVariants = cva(
  'flex shrink-0 flex-col-reverse gap-2 border-t px-6 py-4 sm:flex-row sm:justify-end',
);

export type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertDialogFooterVariants>;

export const AlertDialogFooter: FC<AlertDialogFooterProps> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(alertDialogFooterVariants({ className }))}
    {...props}
  />
);

/* -----------------------------------------------------------------------------
 * Component: AlertDialogTitle
 * -------------------------------------------------------------------------- */

export const alertDialogTitleVariants = cva('text-lg font-semibold');

export type AlertDialogTitleProps = ComponentPropsWithoutRef<typeof Title> &
  VariantProps<typeof alertDialogTitleVariants>;

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof Title>,
  AlertDialogTitleProps
>(({ className, ...props }, forwardedRef) => (
  <Title
    ref={forwardedRef}
    className={twMerge(alertDialogTitleVariants({ className }))}
    {...props}
  />
));

AlertDialogTitle.displayName = Title.displayName;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogDescription
 * -------------------------------------------------------------------------- */

export const alertDialogDescriptionVariants = cva(
  'text-muted-foreground text-sm',
);

export type AlertDialogDescriptionProps = ComponentPropsWithoutRef<
  typeof Description
> &
  VariantProps<typeof alertDialogDescriptionVariants>;

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof Description>,
  AlertDialogDescriptionProps
>(({ className, ...props }, forwardedRef) => (
  <Description
    ref={forwardedRef}
    {...props}
    className={twMerge(alertDialogDescriptionVariants({ className }))}
  />
));

AlertDialogDescription.displayName = Description.displayName;
