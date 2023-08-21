'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, MouseEventHandler } from 'react';
import { Product } from '@/lib/types';
import Image from 'next/image';
import { Button } from '@devlabs/ui/src/core/button';
import { Expand, ShoppingCart } from 'lucide-react';
import { Currency } from '@/components/ui/currency';
import { useRouter } from 'next/navigation';
import { usePreviewModal } from '@/hooks/use-preview-modal';
import { useCart } from '@/hooks/use-cart';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ProductCard
 * ------------------------------------------------------------------------------------------------------------------ */

const productCardVariants = cva(
  'group cursor-pointer space-y-4 rounded-xl border bg-white p-3',
);

type ProductCardVariantProps = VariantProps<typeof productCardVariants> & {
  data: Product;
};

export type ProductCardProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ProductCardVariantProps
> &
  ProductCardVariantProps;

export const ProductCard: FC<ProductCardProps> = ({
  className,
  data,
  ...props
}) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      {...props}
      className={productCardVariants({ className })}
    >
      {/* Images and Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          alt="Product Image"
          className="aspect-square rounded-md object-cover object-center"
          src={data?.images?.[0]?.url}
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <Button startIcon={Expand} variant="white" onClick={onPreview} />
            <Button
              startIcon={ShoppingCart}
              variant="white"
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
