'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { InfoIcon } from 'lucide-react';
import { ComponentProps, FC, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { Label as LabelPrimitive } from './core/label';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/label';

/* -----------------------------------------------------------------------------
 * Component: Label
 * -------------------------------------------------------------------------- */

export const labelVariants = cva('flex items-center gap-2 text-sm leading-4', {
  variants: {
    required: {
      true: 'after:text-destructive after:font-mono after:text-xs after:content-["*"]',
    },
  },
  defaultVariants: {
    required: false,
  },
});

export type LabelProps = ComponentProps<typeof LabelPrimitive> &
  VariantProps<typeof labelVariants> & {
    tooltip?: string;
  };

export const Label: FC<LabelProps> = ({
  children,
  tooltip,
  className,
  required = false,
  ...props
}) => (
  <LabelPrimitive
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
  </LabelPrimitive>
);
