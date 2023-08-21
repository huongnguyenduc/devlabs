'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, Fragment, HTMLAttributes, useTransition } from 'react';
import { Button } from '@devlabs/ui/src/button';
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
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { Separator } from '@devlabs/ui/src/core/separator';
import { sizeSchema, SizeSchema } from '@/lib/validations/sizes';
import { Size } from '@prisma/client';
import { Heading } from '@/components/ui/heading/heading';
import { toast } from '@devlabs/ui/src/use-toast';
import { DeleteSizeButton } from './delete-size-button';
import { page } from '@/lib/constants/page';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: SizeForm
 * ------------------------------------------------------------------------------------------------------------------ */

const sizeFormVariants = cva('');

type SizeFormVariantProps = VariantProps<typeof sizeFormVariants> & {
  initialData: Size | null;
};

export type SizeFormProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof SizeFormVariantProps
> &
  SizeFormVariantProps;

export const SizeForm: FC<SizeFormProps> = ({
  className,
  initialData,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<SizeSchema>({
    resolver: zodResolver(sizeSchema),
    defaultValues: initialData || {
      name: '',
      value: '',
    },
  });

  const title = initialData ? 'Edit size' : 'Create size';
  const description = initialData ? 'Edit a size' : 'Add a new size';
  const toastMessage = initialData ? 'Size updated' : 'Size created';
  const action = initialData ? 'Save changes' : 'Create';

  const onSubmit = async (data: SizeSchema) => {
    try {
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/sizes/${params.sizeId}`,
          data,
        );
      } else {
        await axios.post(`/api/${params.storeId}/sizes`, data);
      }
      startTransition(() => {
        router.refresh();
        router.push(page.store.sizes(params.storeId as string));
        toast({
          variant: 'success',
          title: 'Success',
          description: toastMessage,
        });
      });
    } catch (error) {
      toast({
        variant: 'error',
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  };

  return (
    <Fragment>
      <div {...props} className={sizeFormVariants({ className })}>
        <div className="flex items-center justify-between">
          <Heading subtitle={description} title={title} />
          {initialData && (
            <DeleteSizeButton
              sizeId={params.sizeId as string}
              storeId={params.storeId as string}
            />
          )}
        </div>
        <Separator />
        <Form {...form}>
          <form
            className="space-y-7.5 w-full"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={formState.isSubmitting || isPending}
                        placeholder="Size name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input
                        disabled={formState.isSubmitting || isPending}
                        placeholder="Size value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="ml-auto"
              disabled={form.formState.isSubmitting || isPending}
              loading={form.formState.isSubmitting || isPending}
              type="submit"
            >
              {action}
            </Button>
          </form>
        </Form>
        <Separator />
      </div>
    </Fragment>
  );
};
