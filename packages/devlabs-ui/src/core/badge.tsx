import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Badge
 * -------------------------------------------------------------------------- */

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground border-transparent',
        secondary: 'bg-secondary text-secondary-foreground border-transparent',
        outline: 'border-input',
        destructive:
          'bg-destructive text-destructive-foreground border-transparent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export const Badge: FC<BadgeProps> = ({ className, variant, ...props }) => (
  <div className={twMerge(badgeVariants({ className, variant }))} {...props} />
);
