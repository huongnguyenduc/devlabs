import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: NoResults
 * ------------------------------------------------------------------------------------------------------------------ */

const noResultsVariants = cva(
  'flex h-full w-full items-center justify-center text-neutral-500',
);

type NoResultsVariantProps = VariantProps<typeof noResultsVariants>;

export type NoResultsProps = NoResultsVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof NoResultsVariantProps>;

export const NoResults: FC<NoResultsProps> = ({ className, ...props }) => (
  <div {...props} className={noResultsVariants({ className })}>
    No results found.
  </div>
);
