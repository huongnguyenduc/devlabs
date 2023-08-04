import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Input
 * -------------------------------------------------------------------------- */

export const inputVariants = cva(
  [
    'border-input min-w-0 rounded-xl border bg-transparent px-3 py-2 text-base',
    'sm:text-sm sm:file:text-sm',
    'file:border-0 file:bg-transparent file:text-base file:font-medium',
    'placeholder:text-muted-foreground',
    'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-invalid:border-destructive',
  ],
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      inline: {
        true: 'inline-flex',
        false: 'flex w-full',
      },
    },
    defaultVariants: {
      size: 'md',
      inline: false,
    },
  },
);

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof VariantProps<typeof inputVariants>
> &
  VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, inline, ...props }, forwardedRef) => (
    <input
      ref={forwardedRef}
      className={twMerge(inputVariants({ className, size, inline }))}
      {...props}
    />
  ),
);

Input.displayName = 'Input';
