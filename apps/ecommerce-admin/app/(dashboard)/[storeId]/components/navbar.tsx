import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { page } from '@/lib/constants/page';
import { MainNav } from '@/app/(dashboard)/[storeId]/components/main-nav';
import StoreSwitcher from '@/app/(dashboard)/[storeId]/components/store-switcher';
import { Store } from '@prisma/client';
import { ThemeToggle } from '@/components/ui/theme-toggle/theme-toggle';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Navbar
 * ------------------------------------------------------------------------------------------------------------------ */

const navbarVariants = cva('border-b');

type NavbarVariantProps = VariantProps<typeof navbarVariants> & {
  items: Store[];
};

export type NavbarProps = NavbarVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof NavbarVariantProps>;

export const Navbar: FC<NavbarProps> = ({ className, items, ...props }) => (
  <div {...props} className={navbarVariants({ className })}>
    <div className="flex h-16 items-center gap-x-4 px-4">
      <StoreSwitcher items={items} />
      <MainNav />
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <SignedIn>
          <UserButton afterSignOutUrl={page.home} />
        </SignedIn>
      </div>
    </div>
  </div>
);
