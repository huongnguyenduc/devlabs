import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Billboard as BillboardType } from '@/lib/types';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Billboard
 * ------------------------------------------------------------------------------------------------------------------ */

const billboardVariants = cva('overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8');

type BillboardVariantProps = VariantProps<typeof billboardVariants> & {
  data: BillboardType;
};

export type BillboardProps = BillboardVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof BillboardVariantProps>;

export const Billboard: FC<BillboardProps> = ({
  className,
  data,
  ...props
}) => (
  <div {...props} className={billboardVariants({ className })}>
    <div
      className="relative aspect-square overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat md:aspect-[2.4/1]"
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
        <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
          {data?.label}
        </div>
      </div>
    </div>
  </div>
);
