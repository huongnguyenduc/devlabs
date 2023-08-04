import { cva, cx, VariantProps } from 'class-variance-authority';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './core/button';
import { Input as PrimitiveInput } from './core/input';
import { IconProps } from './icons';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/input';

/* -----------------------------------------------------------------------------
 * Component: InputPassword
 * -------------------------------------------------------------------------- */

export const inputPasswordVariants = cva('pr-10.5');

export type InputPasswordProps = Omit<
  ComponentPropsWithoutRef<typeof PrimitiveInput>,
  'type'
> &
  VariantProps<typeof inputPasswordVariants>;

export const InputPassword = forwardRef<
  ElementRef<typeof PrimitiveInput>,
  InputPasswordProps
>(({ className, ...props }, forwardedRef) => {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={cx('relative', props.inline && 'inline-block')}>
      <PrimitiveInput
        ref={forwardedRef}
        className={twMerge(inputPasswordVariants({ className }))}
        type={type}
        {...props}
      />
      <Button
        className="right-1.25 absolute top-1/2 -translate-y-1/2"
        disabled={props.disabled}
        shape="pill"
        size="sm"
        startIcon={type === 'password' ? EyeIcon : EyeOffIcon}
        variant="ghost"
        onClick={toggleShowPassword}
      />
    </div>
  );
});

InputPassword.displayName = 'InputPassword';

/* -----------------------------------------------------------------------------
 * Component: Input
 * -------------------------------------------------------------------------- */

export const inputVariants = cva('z-1 relative', {
  variants: {
    hasStartIcon: {
      true: 'pl-10.5',
    },
    hasEndIcon: {
      true: 'pr-10.5',
    },
  },
  defaultVariants: {
    hasStartIcon: false,
    hasEndIcon: false,
  },
});

export type InputProps = ComponentPropsWithoutRef<typeof PrimitiveInput> &
  Omit<VariantProps<typeof inputVariants>, 'hasEndIcon' | 'hasStartIcon'> & {
    startIcon?: FC<IconProps>;
    endIcon?: FC<IconProps>;
    classNames?: {
      startIcon?: string;
      endIcon?: string;
    };
  };

export const Input = forwardRef<ElementRef<typeof PrimitiveInput>, InputProps>(
  (
    { classNames, startIcon: StartIcon, endIcon: EndIcon, className, ...props },
    forwardedRef,
  ) => (
    <div className={cx('relative', props.inline ? 'inline-block' : 'w-full')}>
      {StartIcon && (
        <StartIcon
          className={twMerge(
            'h-4.5 w-4.5 absolute left-3 top-1/2 -translate-y-1/2',
            classNames?.startIcon,
          )}
        />
      )}
      <PrimitiveInput
        ref={forwardedRef}
        className={twMerge(
          inputVariants({
            className,
            hasStartIcon: !!StartIcon,
            hasEndIcon: !!EndIcon,
          }),
        )}
        {...props}
      />
      {EndIcon && (
        <EndIcon
          className={twMerge(
            'h-4.5 w-4.5 absolute right-3 top-1/2 -translate-y-1/2',
            classNames?.endIcon,
          )}
        />
      )}
    </div>
  ),
);

Input.displayName = PrimitiveInput.displayName;
