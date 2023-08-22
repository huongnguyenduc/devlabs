'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Currency } from '@/components/ui/currency';
import { Button } from '@devlabs/ui/src/core/button';
import { useCart } from '@/hooks/use-cart';
import axios from 'axios';
import * as process from 'process';
import { toast } from '@devlabs/ui/src/use-toast';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Summary
 * ------------------------------------------------------------------------------------------------------------------ */

const summaryVariants = cva(
  'mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8',
);

type SummaryVariantProps = VariantProps<typeof summaryVariants>;

export type SummaryProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof SummaryVariantProps
> &
  SummaryVariantProps;

export const Summary: FC<SummaryProps> = ({ className, ...props }) => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast({
        title: 'Payment completed',
        variant: 'success',
      });
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast({
        title: 'Payment canceled. Please try again.',
        variant: 'error',
      });
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
    );

    window.location = response.data.url;
  };

  return (
    <div {...props} className={summaryVariants({ className })}>
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        className="mt-4 w-full"
        disabled={!items?.length}
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};
