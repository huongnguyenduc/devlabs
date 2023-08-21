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
import { colorSchema, ColorSchema } from '@/lib/validations/colors';
import { Color } from '@prisma/client';
import { Heading } from '@/components/ui/heading/heading';
import { toast } from '@devlabs/ui/src/use-toast';
import { DeleteColorButton } from './delete-color-button';
import { page } from '@/lib/constants/page';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ColorForm
 * ------------------------------------------------------------------------------------------------------------------ */

const colorFormVariants = cva('');

type ColorFormVariantProps = VariantProps<typeof colorFormVariants> & {
  initialData: Color | null;
};

export type ColorFormProps = ColorFormVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ColorFormVariantProps>;

export const ColorForm: FC<ColorFormProps> = ({
  className,
  initialData,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<ColorSchema>({
    resolver: zodResolver(colorSchema),
    defaultValues: initialData || {
      name: '',
      value: '',
    },
  });

  const title = initialData ? 'Edit color' : 'Create color';
  const description = initialData ? 'Edit a color' : 'Add a new color';
  const toastMessage = initialData ? 'Color updated' : 'Color created';
  const action = initialData ? 'Save changes' : 'Create';

  const onSubmit = async (data: ColorSchema) => {
    try {
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/colors/${params.colorId}`,
          data,
        );
      } else {
        await axios.post(`/api/${params.storeId}/colors`, data);
      }
      startTransition(() => {
        router.refresh();
        router.push(page.store.colors(params.storeId as string));
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
      <div {...props} className={colorFormVariants({ className })}>
        <div className="flex items-center justify-between">
          <Heading subtitle={description} title={title} />
          {initialData && (
            <DeleteColorButton
              colorId={params.colorId as string}
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
                        placeholder="Color name"
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
                      <div className="flex items-center gap-x-4">
                        <Input
                          disabled={formState.isSubmitting || isPending}
                          placeholder="Color value"
                          {...field}
                        />
                        <div
                          className="rounded-full border p-4"
                          style={{ backgroundColor: field.value }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="ml-auto"
              disabled={form.formState.isSubmitting || isPending}
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
