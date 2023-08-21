import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Container } from './ui/container';
import Link from 'next/link';
import { MainNav } from './main-nav';
import { getCategories } from '@/actions/get-categories';
import { NavbarActions } from './navbar-actions';

export const revalidate = 0;

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Navbar
 * ------------------------------------------------------------------------------------------------------------------ */

const navbarVariants = cva('border-b');

type NavbarVariantProps = VariantProps<typeof navbarVariants>;

export type NavbarProps = NavbarVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof NavbarVariantProps>;

export const Navbar: FC<NavbarProps> = async ({ className, ...props }) => {
  const categories = await getCategories();

  return (
    <div {...props} className={navbarVariants({ className })}>
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link className="ml-4 flex gap-x-2 lg:ml-0" href="/">
            <p className="text-xl font-bold">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
