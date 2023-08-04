import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Provider: RadioGroupContext
 * -------------------------------------------------------------------------- */

export type RadioGroupContextValue = Pick<
  VariantProps<typeof radioGroupVariants>,
  'variant'
>;

export const RadioGroupContext = createContext<RadioGroupContextValue>(
  {} as RadioGroupContextValue,
);

/* -----------------------------------------------------------------------------
 * Component: RadioGroup
 * -------------------------------------------------------------------------- */

export const radioGroupVariants = cva('', {
  variants: {
    variant: {
      default: 'grid gap-2',
      simple: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type RadioGroupProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof radioGroupVariants>;

export const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ className, variant = 'default', ...props }, forwardedRef) => (
    <RadioGroupContext.Provider value={{ variant }}>
      <Root
        ref={forwardedRef}
        className={twMerge(radioGroupVariants({ className, variant }))}
        {...props}
      />
    </RadioGroupContext.Provider>
  ),
);

RadioGroup.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: RadioGroupItem
 * -------------------------------------------------------------------------- */

export const radioGroupItemVariants = cva(
  ['focus:outline-none', 'disabled:cursor-not-allowed disabled:opacity-50'],
  {
    variants: {
      variant: {
        default: [
          'border-primary text-primary aspect-square h-4 w-4 rounded-full border',
          'focus-visible:ring-ring/40 focus-visible:ring-2',
        ],
        simple: ['group'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type RadioGroupItemProps = ComponentPropsWithoutRef<typeof Item> &
  Omit<VariantProps<typeof radioGroupItemVariants>, 'variant'>;

export const RadioGroupItem = forwardRef<
  ElementRef<typeof Item>,
  RadioGroupItemProps
>(({ className, ...props }, forwardedRef) => {
  const { variant } = useContext(RadioGroupContext);

  return (
    <Item
      ref={forwardedRef}
      className={twMerge(radioGroupItemVariants({ className, variant }))}
      {...props}
    />
  );
});

RadioGroupItem.displayName = Item.displayName;

/* -----------------------------------------------------------------------------
 * Component: RadioGroupIndicator
 * -------------------------------------------------------------------------- */

export const radioGroupIndicatorVariants = cva(
  'relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-full after:bg-current',
);

export type RadioGroupIndicatorProps = ComponentPropsWithoutRef<
  typeof Indicator
> &
  VariantProps<typeof radioGroupIndicatorVariants>;

export const RadioGroupIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  RadioGroupIndicatorProps
>(({ className, ...props }, forwardedRef) => (
  <Indicator
    ref={forwardedRef}
    className={twMerge(radioGroupIndicatorVariants({ className }))}
    {...props}
  />
));

RadioGroupIndicator.displayName = Indicator.displayName;
