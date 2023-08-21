'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { page } from '@/lib/constants/page';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: MainNav
 * ------------------------------------------------------------------------------------------------------------------ */

const mainNavVariants = cva('flex items-center space-x-4 lg:space-x-6');

type MainNavVariantProps = VariantProps<typeof mainNavVariants>;

export type MainNavProps = MainNavVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof MainNavVariantProps>;

export const MainNav: FC<MainNavProps> = ({ className, ...props }) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      name: 'Overview',
      href: page.store.overview(params.storeId as string),
      isActive: pathname === page.store.overview(params.storeId as string),
    },
    {
      name: 'Products',
      href: page.store.products(params.storeId as string),
      isActive: pathname === page.store.products(params.storeId as string),
    },
    {
      name: 'Orders',
      href: page.store.orders(params.storeId as string),
      isActive: pathname === page.store.orders(params.storeId as string),
    },
    {
      name: 'Billboards',
      href: page.store.billboards(params.storeId as string),
      isActive: pathname === page.store.billboards(params.storeId as string),
    },
    {
      name: 'Categories',
      href: page.store.categories(params.storeId as string),
      isActive: pathname === page.store.categories(params.storeId as string),
    },
    {
      name: 'Sizes',
      href: page.store.sizes(params.storeId as string),
      isActive: pathname === page.store.sizes(params.storeId as string),
    },
    {
      name: 'Colors',
      href: page.store.colors(params.storeId as string),
      isActive: pathname === page.store.colors(params.storeId as string),
    },
    {
      name: 'Settings',
      href: page.store.settings(params.storeId as string),
      isActive: pathname === page.store.settings(params.storeId as string),
    },
  ];

  return (
    <nav {...props} className={mainNavVariants({ className })}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={twMerge(
            'hover:text-primary text-sm transition-colors',
            route.isActive && 'text-primary',
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
