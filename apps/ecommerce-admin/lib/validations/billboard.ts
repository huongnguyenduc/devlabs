import { z } from 'zod';

export const billboardSchema = z.object({
  label: z.string().nonempty("Label can't be empty"),
  imageUrl: z.string().nonempty("Image URL can't be empty"),
});

export type BillboardSchema = z.infer<typeof billboardSchema>;
