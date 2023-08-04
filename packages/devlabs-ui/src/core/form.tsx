import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  useContext,
  useId,
} from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Label } from './label';
import { Slot } from './slot';

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type FormItemContextValue = {
  id: string;
};

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);
export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField />');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `form-item-${id}`,
    formDescriptionId: `form-item-description-${id}`,
    formMessageId: `form-item-message-${id}`,
    ...fieldState,
  };
};

/* -----------------------------------------------------------------------------
 * Component: Form
 * -------------------------------------------------------------------------- */

export const Form = FormProvider;

/* -----------------------------------------------------------------------------
 * Component: FormField
 * -------------------------------------------------------------------------- */

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>,
) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
);

/* -----------------------------------------------------------------------------
 * Component: FormItem
 * -------------------------------------------------------------------------- */

export const formItemVariants = cva('', {
  variants: {
    inline: {
      true: 'flex gap-2',
      false: 'space-y-2',
    },
  },
  defaultVariants: {
    inline: false,
  },
});

export type FormItemProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof formItemVariants>;

export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, inline = false, ...props }, forwardedRef) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div
          ref={forwardedRef}
          className={twMerge(formItemVariants({ className, inline }))}
          {...props}
        />
      </FormItemContext.Provider>
    );
  },
);

FormItem.displayName = 'FormItem';

/* -----------------------------------------------------------------------------
 * Component: FormLabel
 * -------------------------------------------------------------------------- */

export const FormLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>((props, forwardedRef) => {
  const { formItemId } = useFormField();

  return <Label ref={forwardedRef} htmlFor={formItemId} {...props} />;
});

FormLabel.displayName = 'FormLabel';

/* -----------------------------------------------------------------------------
 * Component: FormControl
 * -------------------------------------------------------------------------- */

export const FormControl = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>((props, forwardedRef) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={forwardedRef}
      data-invalid={!!error}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      {...props}
    />
  );
});

FormControl.displayName = 'FormControl';

/* -----------------------------------------------------------------------------
 * Component: FormDescription
 * -------------------------------------------------------------------------- */

export const formDescriptionVariants = cva('text-muted-foreground text-sm');

export type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof formDescriptionVariants>;

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, forwardedRef) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={forwardedRef}
      className={twMerge(formDescriptionVariants({ className }))}
      id={formDescriptionId}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

/* -----------------------------------------------------------------------------
 * Component: FormMessage
 * -------------------------------------------------------------------------- */

export const formMessageVariants = cva('text-destructive text-sm');

export type FormMessageProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof formMessageVariants>;

export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={forwardedRef}
        className={twMerge(formMessageVariants({ className }))}
        id={formMessageId}
        {...props}
      >
        {body}
      </p>
    );
  },
);

FormMessage.displayName = 'FormMessage';
