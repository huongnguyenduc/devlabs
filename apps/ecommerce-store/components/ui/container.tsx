import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Container
 * ------------------------------------------------------------------------------------------------------------------ */

const containerVariants = cva('mx-auto max-w-7xl');

type ContainerVariantProps = VariantProps<typeof containerVariants>;

export type ContainerProps = ContainerVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ContainerVariantProps>;

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={containerVariants({ className })}>
    {children}
  </div>
);
