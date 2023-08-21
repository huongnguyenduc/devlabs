import { z } from 'zod';

export const sizeSchema = z.object({
  name: z.string().nonempty("Name can't be empty"),
  value: z.string().nonempty("Value can't be empty"),
});

export type SizeSchema = z.infer<typeof sizeSchema>;
