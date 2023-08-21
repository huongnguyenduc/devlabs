'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, Fragment, HTMLAttributes, useTransition } from 'react';
import { Button } from '@devlabs/ui/src/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@devlabs/ui/src/form';
import { Input } from '@devlabs/ui/src/input';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { Separator } from '@devlabs/ui/src/core/separator';
import { productSchema, ProductSchema } from '@/lib/validations/products';
import { Category, Color, Image, Product, Size } from '@prisma/client';
import { Heading } from '@/components/ui/heading/heading';
import { toast } from '@devlabs/ui/src/use-toast';
import { ImageUpload } from '@/components/ui/image-upload/image-upload';
import { DeleteProductButton } from './delete-product-button';
import { page } from '@/lib/constants/page';
import { Select, SelectValue } from '@devlabs/ui/src/core/select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@devlabs/ui/src/select';
import { Checkbox } from '@devlabs/ui/src/checkbox';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ProductForm
 * ------------------------------------------------------------------------------------------------------------------ */

const productFormVariants = cva('');

type ProductFormVariantProps = VariantProps<typeof productFormVariants> & {
  initialData: (Product & { images: Image[] }) | null;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
};

export type ProductFormProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ProductFormVariantProps
> &
  ProductFormVariantProps;

export const ProductForm: FC<ProductFormProps> = ({
  className,
  initialData,
  categories,
  colors,
  sizes,
  ...props
}) => {
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          price: parseFloat(String(initialData?.price)),
        }
      : {
          name: '',
          price: 0,
          categoryId: '',
          colorId: '',
          sizeId: '',
          isFeatured: false,
          isArchived: false,
          images: [],
        },
  });

  const title = initialData ? 'Edit product' : 'Create product';
  const description = initialData ? 'Edit a product' : 'Add a new product';
  const toastMessage = initialData ? 'Product updated' : 'Product created';
  const action = initialData ? 'Save changes' : 'Create';

  const onSubmit = async (data: ProductSchema) => {
    try {
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/products/${params.productId}`,
          data,
        );
      } else {
        await axios.post(`/api/${params.storeId}/products`, data);
      }
      startTransition(() => {
        router.refresh();
        router.push(page.store.products(params.storeId as string));
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
      <div {...props} className={productFormVariants({ className })}>
        <div className="flex items-center justify-between">
          <Heading subtitle={description} title={title} />
          {initialData && (
            <DeleteProductButton
              productId={params.productId as string}
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
              name="images"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <ImageUpload
                      disabled={formState.isSubmitting || isPending}
                      value={field.value.map((image) => image.url)}
                      onChange={(url) =>
                        field.onChange([...field.value, { url }])
                      }
                      onRemove={(url) =>
                        field.onChange(
                          field.value.filter((image) => image.url !== url),
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        disabled={formState.isSubmitting || isPending}
                        placeholder="9.99"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
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
                            placeholder="Select a category"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sizeId"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Size</FormLabel>
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
                            placeholder="Select a size"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size.id} value={size.id}>
                            {size.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="colorId"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Color</FormLabel>
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
                            placeholder="Select a color"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {colors.map((color) => (
                          <SelectItem key={color.id} value={color.id}>
                            {color.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Featured</FormLabel>
                      <FormDescription>
                        This product will appear on the home page
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isArchived"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Archived</FormLabel>
                      <FormDescription>
                        This product will not appear anywhere on the store
                      </FormDescription>
                    </div>
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
