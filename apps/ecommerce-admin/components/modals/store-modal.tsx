'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '@/components/ui/modal/modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@devlabs/ui/src/form';
import { Input } from '@devlabs/ui/src/input';
import { Button } from '@devlabs/ui/src/button';
import { storeSchema, StoreSchema } from '@/lib/validations/stores';
import axios from 'axios';
import { toast } from '@devlabs/ui/src/use-toast';
import { page } from '@/lib/constants/page';

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const form = useForm<StoreSchema>({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: StoreSchema) => {
    try {
      const response = await axios.post('/api/stores', data);
      window.location.assign(page.store.overview(response.data.id));
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'An error occurred while creating the store',
        variant: 'error',
      });
    }
  };

  return (
    <Modal
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      title="Create store"
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 px-6 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={formState.isSubmitting}
                        {...field}
                        placeholder="E-commerce"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-end space-x-2 pt-6">
                <Button
                  disabled={form.formState.isSubmitting}
                  variant="outline"
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button loading={form.formState.isSubmitting} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
