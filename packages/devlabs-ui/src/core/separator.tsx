import { Root } from '@radix-ui/react-separator';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Separator
 * -------------------------------------------------------------------------- */

export const separatorVariants = cva(
  [
    'bg-border',
    'data-orientation-horizontal:h-px data-orientation-horizontal:w-full',
    'data-orientation-vertical:h-full data-orientation-vertical:w-px',
  ],
  {
    variants: {
      margin: {
        '0': undefined,
        '1': [
          'data-orientation-vertical:mx-1',
          'data-orientation-horizontal:my-1',
        ],
        '2': [
          'data-orientation-vertical:mx-2',
          'data-orientation-horizontal:my-2',
        ],
        '3': [
          'data-orientation-vertical:mx-3',
          'data-orientation-horizontal:my-3',
        ],
        '4': [
          'data-orientation-vertical:mx-4',
          'data-orientation-horizontal:my-4',
        ],
      },
    },
    defaultVariants: {
      margin: '4',
    },
  },
);

export type SeparatorProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof separatorVariants>;

export const Separator = forwardRef<ElementRef<typeof Root>, SeparatorProps>(
  ({ className, margin = '4', ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(separatorVariants({ className, margin }))}
      {...props}
    />
  ),
);

Separator.displayName = Root.displayName;
