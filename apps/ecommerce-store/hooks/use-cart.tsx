import { Product } from '@/lib/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { toast } from '@devlabs/ui/src/use-toast';

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({ title: 'Item already in cart', variant: 'warning' });
        }

        set(() => ({ items: [...currentItems, data] }));

        toast({ title: 'Item added to cart', variant: 'success' });
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
        toast({ title: 'Item removed from cart', variant: 'success' });
      },
      removeAll: () => {
        set(() => ({ items: [] }));
      },
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
