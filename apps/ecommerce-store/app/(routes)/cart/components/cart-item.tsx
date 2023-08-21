'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import { Button } from '@devlabs/ui/src/core/button';
import { X } from 'lucide-react';
import { Currency } from '@/components/ui/currency';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: CartItem
 * ------------------------------------------------------------------------------------------------------------------ */

const cartItemVariants = cva('flex border-b py-6');

type CartItemVariantProps = VariantProps<typeof cartItemVariants> & {
  data: Product;
};

export type CartItemProps = CartItemVariantProps &
  Omit<HTMLAttributes<HTMLLIElement>, keyof CartItemVariantProps>;

export const CartItem: FC<CartItemProps> = ({ className, data, ...props }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li {...props} className={cartItemVariants({ className })}>
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          alt=""
          className="object-cover object-center"
          src={data.images[0].url}
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <Button startIcon={X} variant="ghost" onClick={onRemove} />
        </div>
        <div className="relative pr-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};
