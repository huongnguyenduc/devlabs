'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, useState } from 'react';
import { Color, Size } from '@/lib/types';
import { Button } from '@devlabs/ui/src/core/button';
import { PlusIcon } from 'lucide-react';
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@devlabs/ui/src/core/dialog';
import { DialogContent } from '@devlabs/ui/src/dialog';
import { Filter } from '@/app/(routes)/category/[categoryId]/components/filter';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: MobileFilters
 * ------------------------------------------------------------------------------------------------------------------ */

const mobileFiltersVariants = cva('px-6 pt-4');

type MobileFiltersVariantProps = VariantProps<typeof mobileFiltersVariants> & {
  sizes: Size[];
  colors: Color[];
};

export type MobileFiltersProps = MobileFiltersVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof MobileFiltersVariantProps>;

export const MobileFilters: FC<MobileFiltersProps> = ({
  className,
  sizes,
  colors,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button endIcon={PlusIcon}>Filters</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <DialogBody {...props} className={mobileFiltersVariants({ className })}>
          <Filter data={sizes} name="Sizes" valueKey="sizeId" />
          <Filter data={colors} name="Colors" valueKey="colorId" />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
