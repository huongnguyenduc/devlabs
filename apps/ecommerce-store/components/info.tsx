'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Product } from '@/lib/types';
import { Currency } from '@/components/ui/currency';
import { Button } from '@devlabs/ui/src/core/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Info
 * ------------------------------------------------------------------------------------------------------------------ */

const infoVariants = cva('');

type InfoVariantProps = VariantProps<typeof infoVariants> & {
  data: Product;
};

export type InfoProps = InfoVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof InfoVariantProps>;

export const Info: FC<InfoProps> = ({ className, data, ...props }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div {...props} className={infoVariants({ className })}>
      <h1 className="text-2xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button endIcon={ShoppingCart} onClick={onAddToCart}>
          Add To Card
        </Button>
      </div>
    </div>
  );
};
