import { z } from 'zod';

export const categorySchema = z.object({
  name: z.string().nonempty("Name can't be empty"),
  billboardId: z.string().nonempty("Billboard Id can't be empty"),
});

export type CategorySchema = z.infer<typeof categorySchema>;
