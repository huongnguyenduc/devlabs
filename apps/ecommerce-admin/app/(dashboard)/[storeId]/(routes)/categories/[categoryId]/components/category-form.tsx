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
import { categorySchema, CategorySchema } from '@/lib/validations/categories';
import { Billboard, Category } from '@prisma/client';
import { Heading } from '@/components/ui/heading/heading';
import { toast } from '@devlabs/ui/src/use-toast';
import { DeleteCategoryButton } from './delete-category-button';
import { page } from '@/lib/constants/page';
import { Select, SelectValue } from '@devlabs/ui/src/core/select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@devlabs/ui/src/select';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: CategoryForm
 * ------------------------------------------------------------------------------------------------------------------ */

const categoryFormVariants = cva('');

type CategoryFormVariantProps = VariantProps<typeof categoryFormVariants> & {
  initialData: Category | null;
  billboards: Billboard[];
};

export type CategoryFormProps = CategoryFormVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CategoryFormVariantProps>;

export const CategoryForm: FC<CategoryFormProps> = ({
  className,
  initialData,
  billboards,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<CategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData || {
      name: '',
      billboardId: '',
    },
  });

  const title = initialData ? 'Edit category' : 'Create category';
  const description = initialData ? 'Edit a category' : 'Add a new category';
  const toastMessage = initialData ? 'Category updated' : 'Category created';
  const action = initialData ? 'Save changes' : 'Create';

  const onSubmit = async (data: CategorySchema) => {
    try {
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/categories/${params.categoryId}`,
          data,
        );
      } else {
        await axios.post(`/api/${params.storeId}/categories`, data);
      }
      startTransition(() => {
        router.refresh();
        router.push(page.store.categories(params.storeId as string));
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
      <div {...props} className={categoryFormVariants({ className })}>
        <div className="flex items-center justify-between">
          <Heading subtitle={description} title={title} />
          {initialData && (
            <DeleteCategoryButton
              categoryId={params.categoryId as string}
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
                        placeholder="Category name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="billboardId"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Billboard</FormLabel>
                    <Select
                      defaultValue={field.value}
                      disabled={formState.isSubmitting}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select a billboard"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {billboards.map((billboard) => (
                          <SelectItem key={billboard.id} value={billboard.id}>
                            {billboard.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
