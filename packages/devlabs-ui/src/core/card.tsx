import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Card
 * -------------------------------------------------------------------------- */

export const cardVariants = cva(
  'bg-card text-card-foreground rounded-lg border shadow-lg',
);

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(cardVariants({ className }))}
      {...props}
    />
  ),
);

Card.displayName = 'Card';

/* -----------------------------------------------------------------------------
 * Component: CardHeader
 * -------------------------------------------------------------------------- */

export const cardHeaderVariants = cva('flex flex-col gap-1.5 p-6');

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardHeaderVariants>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(cardHeaderVariants({ className }))}
      {...props}
    />
  ),
);

CardHeader.displayName = 'CardHeader';

/* -----------------------------------------------------------------------------
 * Component: CardFooter
 * -------------------------------------------------------------------------- */

export const cardFooterVariants = cva('flex items-center p-6 pt-0');

export type CardFooterProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardFooterVariants>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(cardFooterVariants({ className }))}
      {...props}
    />
  ),
);

CardFooter.displayName = 'CardFooter';

/* -----------------------------------------------------------------------------
 * Component: CardTitle
 * -------------------------------------------------------------------------- */

export const cardTitleVariants = cva(
  'text-lg font-semibold leading-none tracking-tight',
);

export type CardTitleProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardTitleVariants>;

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(cardTitleVariants({ className }))}
      {...props}
    />
  ),
);

CardTitle.displayName = 'CardTitle';

/* -----------------------------------------------------------------------------
 * Component: CardDescription
 * -------------------------------------------------------------------------- */

export const cardDescriptionVariants = cva('text-muted-foreground text-sm');

export type CardDescriptionProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardDescriptionVariants>;

export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(cardDescriptionVariants({ className }))}
      {...props}
    />
  ),
);

CardDescription.displayName = 'CardDescription';

/* -----------------------------------------------------------------------------
 * Component: CardContent
 * -------------------------------------------------------------------------- */

export const cardContentVariants = cva('p-6 pt-0');

export type CardContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardContentVariants>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={twMerge(cardContentVariants({ className }))}
      {...props}
    />
  ),
);

CardContent.displayName = 'CardContent';
