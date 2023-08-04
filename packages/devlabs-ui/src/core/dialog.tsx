import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';
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

/* -----------------------------------------------------------------------------
 * Provider: DialogContext
 * -------------------------------------------------------------------------- */

export type DialogContextValue = Pick<DialogProps, 'scrollable' | 'variant'>;

export const DialogContext = createContext<DialogContextValue>(
  {} as DialogContextValue,
);

/* -----------------------------------------------------------------------------
 * Component: Dialog
 * -------------------------------------------------------------------------- */

export type DialogProps = ComponentProps<typeof Root> & {
  scrollable?: boolean;
  variant?: 'default' | 'simple';
};

export const Dialog: FC<DialogProps> = ({
  variant = 'default',
  scrollable = false,
  ...props
}) => (
  <DialogContext.Provider value={{ variant, scrollable }}>
    <Root {...props} />
  </DialogContext.Provider>
);

/* -----------------------------------------------------------------------------
 * Component: DialogTrigger
 * -------------------------------------------------------------------------- */

export const DialogTrigger = Trigger;

/* -----------------------------------------------------------------------------
 * Component: DialogPortal
 * -------------------------------------------------------------------------- */

export const DialogPortal = Portal;

/* -----------------------------------------------------------------------------
 * Component: DialogOverlay
 * -------------------------------------------------------------------------- */

export const dialogOverlayVariants = cva([
  'bg-background/80 fixed inset-0 z-20',
  'data-state-open:animate-overlay-show data-state-closed:animate-overlay-hide',
]);

export type DialogOverlayProps = ComponentPropsWithoutRef<typeof Overlay> &
  VariantProps<typeof dialogOverlayVariants>;

export const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  DialogOverlayProps
>(({ className, ...props }, forwardedRef) => (
  <Overlay
    ref={forwardedRef}
    className={twMerge(dialogOverlayVariants({ className }))}
    {...props}
  />
));

DialogOverlay.displayName = Overlay.displayName;

/* -----------------------------------------------------------------------------
 * Component: DialogContent
 * -------------------------------------------------------------------------- */

export const dialogContentVariants = cva(
  'bg-background relative border shadow-lg focus:outline-none',
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

export type DialogContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof dialogContentVariants>;

export const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  DialogContentProps
>(({ className, size = 'md', ...props }, forwardedRef) => {
  return (
    <Content
      ref={forwardedRef}
      className={twMerge(dialogContentVariants({ className, size }))}
      {...props}
    />
  );
});

DialogContent.displayName = Content.displayName;

/* -----------------------------------------------------------------------------
 * Component: DialogHeader
 * -------------------------------------------------------------------------- */

export const dialogHeaderVariants = cva(
  'grid shrink-0 gap-2 border-b px-6 py-4',
);

export type DialogHeaderProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof dialogHeaderVariants>;

export const DialogHeader: FC<DialogHeaderProps> = ({
  className,
  ...props
}) => (
  <header className={twMerge(dialogHeaderVariants({ className }))} {...props} />
);

/* -----------------------------------------------------------------------------
 * Component: DialogBody
 * -------------------------------------------------------------------------- */

export const dialogBodyVariants = cva('grow overflow-y-auto');

export type DialogBodyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof dialogBodyVariants>;

export const DialogBody: FC<DialogBodyProps> = ({ className, ...props }) => (
  <main className={twMerge(dialogBodyVariants({ className }))} {...props} />
);

/* -----------------------------------------------------------------------------
 * Component: DialogFooter
 * -------------------------------------------------------------------------- */

export const dialogFooterVariants = cva(
  'flex shrink-0 flex-col-reverse gap-2 border-t px-6 py-4 sm:flex-row sm:justify-end',
);

export type DialogFooterProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof dialogFooterVariants>;

export const DialogFooter: FC<DialogFooterProps> = ({
  className,
  ...props
}) => (
  <footer className={twMerge(dialogFooterVariants({ className }))} {...props} />
);

/* -----------------------------------------------------------------------------
 * Component: DialogTitle
 * -------------------------------------------------------------------------- */

export const dialogTitleVariants = cva('text-lg font-semibold');

export type DialogTitleProps = ComponentPropsWithoutRef<typeof Title> &
  VariantProps<typeof dialogTitleVariants>;

export const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  DialogTitleProps
>(({ className, ...props }, forwardedRef) => (
  <Title
    ref={forwardedRef}
    className={twMerge(dialogTitleVariants({ className }))}
    {...props}
  />
));

DialogTitle.displayName = Title.displayName;

/* -----------------------------------------------------------------------------
 * Component: DialogDescription
 * -------------------------------------------------------------------------- */

export const dialogDescriptionVariants = cva('text-muted-foreground text-sm');

export type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof Description
> &
  VariantProps<typeof dialogDescriptionVariants>;

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  DialogDescriptionProps
>(({ className, ...props }, forwardedRef) => (
  <Description
    ref={forwardedRef}
    className={twMerge(dialogDescriptionVariants({ className }))}
    {...props}
  />
));

DialogDescription.displayName = Description.displayName;

/* -----------------------------------------------------------------------------
 * Component: DialogClose
 * -------------------------------------------------------------------------- */

export const DialogClose = Close;
