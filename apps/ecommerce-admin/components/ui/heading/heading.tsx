import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

/* -----------------------------------------------------------------------------
 * Component: Heading
 * -------------------------------------------------------------------------- */

export const headingVariants = cva('');

export type HeadingProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headingVariants> & {
    title: string;
    subtitle?: string;
  };

export const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  className,

  ...props
}) => (
  <div className={headingVariants({ className })} {...props}>
    <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
      {title}
    </h2>
    <p className="text-muted-foreground mt-2">{subtitle}</p>
  </div>
);
