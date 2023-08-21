import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().nonempty("Name can't be empty"),
  images: z.object({ url: z.string() }).array(),
  price: z.coerce.number().min(1, "Price can't be less than 1"),
  categoryId: z.string().nonempty("Category can't be empty"),
  colorId: z.string().nonempty("Color can't be empty"),
  sizeId: z.string().nonempty("Size can't be empty"),
  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
