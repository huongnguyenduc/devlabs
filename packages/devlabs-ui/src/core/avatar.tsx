import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Avatar
 * -------------------------------------------------------------------------- */

export const avatarVariants = cva(
  'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'h-6 w-6' /* 24px */,
        sm: 'h-8 w-8' /* 32px */,
        md: 'h-12 w-12' /* 48px */,
        lg: 'h-16 w-16' /* 64px */,
        xl: 'h-20 w-20' /* 96px */,
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type AvatarProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof avatarVariants>;

export const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  ({ className, size, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(avatarVariants({ className, size }))}
      {...props}
    />
  ),
);

Avatar.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: AvatarImage
 * -------------------------------------------------------------------------- */

export const avatarImageVariants = cva(
  'aspect-square h-full w-full object-cover object-center',
);

export type AvatarImageProps = ComponentPropsWithoutRef<typeof Image> &
  VariantProps<typeof avatarImageVariants>;

export const AvatarImage = forwardRef<
  ElementRef<typeof Image>,
  AvatarImageProps
>(({ className, alt, ...props }, forwardedRef) => (
  <Image
    ref={forwardedRef}
    alt={alt}
    className={twMerge(avatarImageVariants({ className }))}
    {...props}
  />
));

AvatarImage.displayName = Image.displayName;

/* -----------------------------------------------------------------------------
 * Component: AvatarFallback
 * -------------------------------------------------------------------------- */

export const avatarFallbackVariants = cva(
  'bg-muted flex h-full w-full items-center justify-center text-sm',
);

export type AvatarFallbackProps = ComponentPropsWithoutRef<typeof Fallback> &
  VariantProps<typeof avatarFallbackVariants>;

export const AvatarFallback = forwardRef<
  ElementRef<typeof Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, forwardedRef) => (
  <Fallback
    ref={forwardedRef}
    className={twMerge(avatarFallbackVariants({ className }))}
    {...props}
  />
));

AvatarFallback.displayName = Fallback.displayName;
