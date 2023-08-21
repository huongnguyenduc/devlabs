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
import { billboardSchema, BillboardSchema } from '@/lib/validations/billboard';
import { Billboard } from '@prisma/client';
import { Heading } from '@/components/ui/heading/heading';
import { toast } from '@devlabs/ui/src/use-toast';
import { ImageUpload } from '@/components/ui/image-upload/image-upload';
import { DeleteBillboardButton } from './delete-billboard-button';
import { page } from '@/lib/constants/page';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: BillboardForm
 * ------------------------------------------------------------------------------------------------------------------ */

const billboardFormVariants = cva('');

type BillboardFormVariantProps = VariantProps<typeof billboardFormVariants> & {
  initialData: Billboard | null;
};

export type BillboardFormProps = BillboardFormVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof BillboardFormVariantProps>;

export const BillboardForm: FC<BillboardFormProps> = ({
  className,
  initialData,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<BillboardSchema>({
    resolver: zodResolver(billboardSchema),
    defaultValues: initialData || {
      label: '',
      imageUrl: '',
    },
  });

  const title = initialData ? 'Edit billboard' : 'Create billboard';
  const description = initialData ? 'Edit a billboard' : 'Add a new billboard';
  const toastMessage = initialData ? 'Billboard updated' : 'Billboard created';
  const action = initialData ? 'Save changes' : 'Create';

  const onSubmit = async (data: BillboardSchema) => {
    try {
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/billboards/${params.billboardId}`,
          data,
        );
      } else {
        await axios.post(`/api/${params.storeId}/billboards`, data);
      }
      startTransition(() => {
        router.refresh();
        router.push(page.store.billboards(params.storeId as string));
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
      <div {...props} className={billboardFormVariants({ className })}>
        <div className="flex items-center justify-between">
          <Heading subtitle={description} title={title} />
          {initialData && (
            <DeleteBillboardButton
              billboardId={params.billboardId as string}
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
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel>Background image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      disabled={formState.isSubmitting || isPending}
                      value={field?.value ? [field.value] : []}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange('')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="label"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Label</FormLabel>
                    <FormControl>
                      <Input
                        disabled={formState.isSubmitting || isPending}
                        placeholder="Billboard label"
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
