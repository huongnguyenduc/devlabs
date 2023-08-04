import { cva, cx, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'class-variance-authority/dist/types';
import { Loader2Icon } from 'lucide-react';
import {
  ButtonHTMLAttributes,
  Children,
  FC,
  forwardRef,
  RefAttributes,
  SVGProps,
  useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Button
 * -------------------------------------------------------------------------- */

type ButtonSize = 'lg' | 'md' | 'sm';

type ButtonVariant =
  | 'destructive'
  | 'ghost'
  | 'outline'
  | 'primary'
  | 'secondary';

const sizes: {
  icon: boolean;
  sizes: {
    className: ClassValue;
    size: ButtonSize;
    variant: ButtonVariant[];
  }[];
}[] = [
  {
    icon: true,
    sizes: [
      {
        variant: ['primary', 'secondary', 'destructive', 'ghost'],
        size: 'sm',
        className: 'px-2',
      },
      {
        variant: ['outline'],
        size: 'sm',
        className: 'px-1.75',
      },
      // ---
      {
        variant: ['primary', 'secondary', 'destructive', 'ghost'],
        size: 'md',
        className: 'px-3',
      },
      {
        variant: ['outline'],
        size: 'md',
        className: 'px-2.75',
      },
      // ---
      {
        variant: ['primary', 'secondary', 'destructive', 'ghost'],
        size: 'lg',
        className: 'px-4',
      },
      {
        variant: ['outline'],
        size: 'lg',
        className: 'px-3.75',
      },
    ],
  },
  {
    icon: false,
    sizes: [
      {
        variant: ['primary', 'secondary', 'destructive', 'ghost'],
        size: 'sm',
        className: 'px-4',
      },
      {
        variant: ['outline'],
        size: 'sm',
        className: 'px-3.75',
      },
      // ---
      {
        variant: ['primary', 'secondary', 'destructive', 'ghost'],
        size: 'md',
        className: 'px-5',
      },
      {
        variant: ['outline'],
        size: 'md',
        className: 'px-4.75',
      },
      // ---
      {
        variant: ['primary', 'secondary', 'destructive', 'ghost'],
        size: 'lg',
        className: 'px-6',
      },
      {
        variant: ['outline'],
        size: 'lg',
        className: 'px-5.75',
      },
    ],
  },
];

// Flatten the array and group variants if the size is the same
const compoundSizes = sizes.flatMap<{
  className: ClassValue;
  icon: boolean;
  size: ButtonSize;
  variant: ButtonVariant[];
}>(({ icon, sizes }) =>
  sizes.map(({ variant, size, className }) => ({
    variant,
    icon,
    size,
    className,
  })),
);

export const buttonVariants = cva(
  [
    'select-none items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none',
    'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
    'data-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground [&:not([data-disabled])]:hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground [&:not([data-disabled])]:hover:bg-secondary/90',
        outline:
          'border-input [&:not([data-disabled])]:hover:bg-accent [&:not([data-disabled])]:hover:text-accent-foreground border',
        destructive:
          'bg-destructive text-destructive-foreground [&:not([data-disabled])]:hover:bg-destructive/90',
        ghost: '[&:not([data-disabled])]:hover:bg-accent',
        link: 'hover:underline',
      },
      size: {
        sm: 'h-8', // 32px
        md: 'h-10', // 40px
        lg: 'h-12', // 48px
      },
      block: {
        true: 'flex w-full',
        false: 'inline-flex',
      },
      shape: {
        square: 'rounded-sm',
        rounded: 'rounded-xl',
        pill: 'rounded-full',
      },
      justify: {
        center: 'justify-center',
        between: 'justify-between',
      },
      icon: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: ['primary', 'secondary', 'destructive'],
        className: 'data-disabled:bg-opacity-50',
      },
      {
        variant: ['ghost', 'outline'],
        className: 'data-disabled:opacity-50',
      },
      ...compoundSizes,
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      block: false,
      shape: 'rounded',
      icon: false,
      justify: 'center',
    },
  },
);

export const innerButtonVariants = cva(
  'h-4 w-4 shrink-0 text-base text-opacity-100',
  {
    variants: {
      loading: {
        true: 'animate-spin',
        false: undefined,
      },
    },
    defaultVariants: {
      loading: false,
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<VariantProps<typeof buttonVariants>, 'icon'> &
  VariantProps<typeof innerButtonVariants> & {
    endIcon?: FC<RefAttributes<SVGSVGElement>> | FC<SVGProps<SVGSVGElement>>;
    startIcon?: FC<RefAttributes<SVGSVGElement>> | FC<SVGProps<SVGSVGElement>>;
    classNames?: {
      startIcon?: string;
      endIcon?: string;
    };
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      classNames,
      variant,
      size,
      block,
      shape,
      justify,
      loading,
      startIcon,
      endIcon,
      ...props
    },
    forwardedRef,
  ) => {
    const StartIcon = useMemo(() => {
      if (loading && (startIcon || !endIcon)) {
        return Loader2Icon;
      }

      return startIcon;
    }, [startIcon, endIcon, loading]);

    const EndIcon = useMemo(() => {
      if (loading && !startIcon && endIcon) {
        return Loader2Icon;
      }

      return endIcon;
    }, [startIcon, endIcon, loading]);

    const hasIcon = useMemo(() => {
      return !!startIcon || !!endIcon;
    }, [startIcon, endIcon]);

    return (
      <button
        ref={forwardedRef}
        data-disabled={loading || props.disabled ? true : undefined}
        disabled={loading || props.disabled}
        type="button"
        className={twMerge(
          buttonVariants({
            className,
            variant,
            size,
            block,
            shape,
            icon: !Children.count(children),
            justify,
          }),
        )}
        {...props}
      >
        {StartIcon && (
          <StartIcon
            className={twMerge(
              innerButtonVariants({
                className: cx(classNames?.startIcon, !hasIcon && 'absolute'),
                loading,
              }),
            )}
          />
        )}

        {children &&
          (!hasIcon && loading ? (
            <span className="opacity-0">{children}</span>
          ) : (
            children
          ))}

        {EndIcon && (
          <EndIcon
            className={twMerge(
              innerButtonVariants({
                className: classNames?.endIcon,
                loading: loading && !startIcon,
              }),
            )}
          />
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
