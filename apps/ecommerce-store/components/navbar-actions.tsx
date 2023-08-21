'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Button } from '@devlabs/ui/src/button';
import { ShoppingBag } from 'lucide-react';
import { useMounted } from '@/lib/hooks/use-mounted';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: NavbarActions
 * ------------------------------------------------------------------------------------------------------------------ */

const navbarActionsVariants = cva('ml-auto flex items-center gap-x-4');

type NavbarActionsVariantProps = VariantProps<typeof navbarActionsVariants>;

export type NavbarActionsProps = NavbarActionsVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof NavbarActionsVariantProps>;

export const NavbarActions: FC<NavbarActionsProps> = ({
  className,
  ...props
}) => {
  const isMounted = useMounted();
  const router = useRouter();

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div {...props} className={navbarActionsVariants({ className })}>
      <Button
        startIcon={ShoppingBag}
        variant="secondary"
        onClick={() => router.push('/cart')}
      >
        {cart.items.length}
      </Button>
    </div>
  );
};
