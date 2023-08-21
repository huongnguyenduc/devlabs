'use client';
import { Container } from '@/components/ui/container';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from './components/cart-item';
import { Summary } from './components/summary';
import { useMounted } from '@/lib/hooks/use-mounted';

export default function CartPage() {
  const isMounted = useMounted();

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {!!cart.items?.length ? (
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-500 ">No items added to cart</p>
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}