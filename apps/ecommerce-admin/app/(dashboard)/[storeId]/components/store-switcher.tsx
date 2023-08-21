'use client';
import { ComponentPropsWithoutRef, useState } from 'react';
import { Popover, PopoverTrigger } from '@devlabs/ui/src/core/popover';
import { Store } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { Button } from '@devlabs/ui/src/core/button';
import { twMerge } from 'tailwind-merge';
import { Check, ChevronsUpDownIcon, PlusIcon, StoreIcon } from 'lucide-react';
import { PopoverContent } from '@devlabs/ui/src/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@devlabs/ui/src/command';
import { useStoreModal } from '@/hooks/use-store-modal';

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  items,
  className,
  ...props
}: StoreSwitcherProps) {
  const storeModal = useStoreModal();
  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const params = useParams();
  const router = useRouter();
  const currentStore = items.find((item) => item.id === params.storeId);
  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string }) => {
    setOpen(false);
    router.push(page.store.overview(store.value));
  };

  return (
    <Popover open={open} variant="simple" onOpenChange={setOpen}>
      <PopoverTrigger asChild {...props}>
        <Button
          className={twMerge('w-[200px] justify-between', className)}
          size="sm"
          variant="outline"
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentStore?.name}
          <ChevronsUpDownIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store..." />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup>
              {formattedItems.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {store.label}

                  <Check
                    className={twMerge(
                      'ml-auto h-4 w-4 shrink-0',
                      currentStore?.id === store.value
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                Create new store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
