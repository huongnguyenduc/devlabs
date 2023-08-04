import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Textarea
 * -------------------------------------------------------------------------- */

export const textareaVariants = cva([
  'border-input flex min-h-[80px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base',
  'sm:text-sm',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
  'data-invalid:border-destructive',
]);

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, forwardedRef) => (
    <textarea
      ref={forwardedRef}
      className={twMerge(textareaVariants({ className }))}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';
