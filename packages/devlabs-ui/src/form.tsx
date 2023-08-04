import { VariantProps } from 'class-variance-authority';
import { InfoIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  Fragment,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { FormLabel as FormPrimitiveLabel } from './core/form';
import { labelVariants } from './label';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/form';

/* -----------------------------------------------------------------------------
 * Component: FormLabel
 * -------------------------------------------------------------------------- */

export type FormLabelProps = ComponentPropsWithoutRef<
  typeof FormPrimitiveLabel
> &
  VariantProps<typeof labelVariants> & {
    tooltip?: string;
  };

export const FormLabel = forwardRef<
  ElementRef<typeof FormPrimitiveLabel>,
  FormLabelProps
>(({ tooltip, children, className, required, ...props }, forwardedRef) => (
  <FormPrimitiveLabel
    ref={forwardedRef}
    className={twMerge(labelVariants({ className, required }))}
    {...props}
  >
    <Fragment>
      {children}

      {tooltip && (
        <Tooltip delayDuration={250}>
          <TooltipTrigger className="shrink-0" type="button">
            <InfoIcon className="text-muted-foreground h-5 w-5" />
          </TooltipTrigger>

          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
      )}
    </Fragment>
  </FormPrimitiveLabel>
));

FormLabel.displayName = FormPrimitiveLabel.displayName;
