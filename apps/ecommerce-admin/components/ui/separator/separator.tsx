'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Separator as SeparatorRoot } from '@devlabs/ui/src/core/separator';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Separator
 * ------------------------------------------------------------------------------------------------------------------ */

const separatorVariants = cva('');

type SeparatorVariantProps = VariantProps<typeof separatorVariants>;

export type SeparatorProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof SeparatorVariantProps
> &
  SeparatorVariantProps;

export const Separator: FC<SeparatorProps> = ({ className, ...props }) => (
  <SeparatorRoot {...props} className={separatorVariants({ className })} />
);
