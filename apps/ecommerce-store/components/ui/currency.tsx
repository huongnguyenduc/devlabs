'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { formatCurrency } from '@devlabs/utils/src/number';
import { useMounted } from '@/lib/hooks/use-mounted';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Currency
 * ------------------------------------------------------------------------------------------------------------------ */

const currencyVariants = cva('font-semibold');

type CurrencyVariantProps = VariantProps<typeof currencyVariants> & {
  value?: number | string;
};

export type CurrencyProps = CurrencyVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CurrencyVariantProps>;

export const Currency: FC<CurrencyProps> = ({ className, value, ...props }) => {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div {...props} className={currencyVariants({ className })}>
      {formatCurrency(Number(value))}
    </div>
  );
};
