'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Category } from '@/lib/types';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: MainNav
 * ------------------------------------------------------------------------------------------------------------------ */

const mainNavVariants = cva('mx-6 flex items-center space-x-4 lg:space-x-6');

type MainNavVariantProps = VariantProps<typeof mainNavVariants> & {
  data: Category[];
};

export type MainNavProps = MainNavVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof MainNavVariantProps>;

export const MainNav: FC<MainNavProps> = ({ className, data, ...props }) => {
  const pathname = usePathname();

  const routes = data?.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav {...props} className={mainNavVariants({ className })}>
      {routes?.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={twMerge(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
