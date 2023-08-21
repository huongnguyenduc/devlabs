'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, Fragment, HTMLAttributes, useTransition } from 'react';
import { Store } from '@prisma/client';
import { Button } from '@devlabs/ui/src/button';
import { useForm } from 'react-hook-form';
import { settingsSchema, SettingsSchema } from '@/lib/validations/settings';
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
import { toast } from '@devlabs/ui/src/use-toast';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { Separator } from '@devlabs/ui/src/core/separator';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: SettingsForm
 * ------------------------------------------------------------------------------------------------------------------ */

const settingsFormVariants = cva('');

type SettingsFormVariantProps = VariantProps<typeof settingsFormVariants> & {
  initialData: Store;
};

export type SettingsFormProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof SettingsFormVariantProps
> &
  SettingsFormVariantProps;

export const SettingsForm: FC<SettingsFormProps> = ({
  className,
  initialData,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<SettingsSchema>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: SettingsSchema) => {
    try {
      await axios.patch(`/api/stores/${params.storeId}`, data);
      startTransition(() => {
        router.refresh();
        toast({
          variant: 'success',
          title: 'Success',
          description: 'Store updated',
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
      <div {...props} className={settingsFormVariants({ className })}>
        <Separator />
        <Form {...form}>
          <form className="space-y-7.5" onSubmit={form.handleSubmit(onSubmit)}>
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
                        placeholder="Store name"
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
              type="submit"
            >
              Save changes
            </Button>
          </form>
        </Form>
        <Separator />
      </div>
    </Fragment>
  );
};
