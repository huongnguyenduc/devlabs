import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Skeleton
 * ------------------------------------------------------------------------------------------------------------------ */

export const skeletonVariants = cva('bg-primary/10 animate-pulse rounded-md');

export type SkeletonProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof skeletonVariants>;

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => (
  <div className={twMerge(skeletonVariants({ className }))} {...props} />
);
