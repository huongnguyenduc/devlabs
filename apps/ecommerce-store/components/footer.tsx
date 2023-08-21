import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Footer
 * ------------------------------------------------------------------------------------------------------------------ */

const footerVariants = cva('border-t bg-white');

type FooterVariantProps = VariantProps<typeof footerVariants>;

export type FooterProps = FooterVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof FooterVariantProps>;

export const Footer: FC<FooterProps> = ({ className, ...props }) => (
  <footer {...props} className={footerVariants({ className })}>
    <div className="mx-auto py-10">
      <p className="text-center text-xs text-black">
        &copy; {new Date().getFullYear()} Ecommerce Store. All rights reserved.
      </p>
    </div>
  </footer>
);
