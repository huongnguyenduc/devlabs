import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Product } from '@/lib/types';
import { NoResults } from '@/components/ui/no-results';
import { ProductCard } from '@/components/ui/product-card';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ProductList
 * ------------------------------------------------------------------------------------------------------------------ */

const productListVariants = cva('space-y-4');

type ProductListVariantProps = VariantProps<typeof productListVariants> & {
  title: string;
  items: Product[];
};

export type ProductListProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ProductListVariantProps
> &
  ProductListVariantProps;

export const ProductList: FC<ProductListProps> = ({
  className,
  title,
  items,
  ...props
}) => (
  <div {...props} className={productListVariants({ className })}>
    <h3 className="text-3xl font-bold">{title}</h3>
    {!!items?.length ? (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    ) : (
      <NoResults />
    )}
  </div>
);
