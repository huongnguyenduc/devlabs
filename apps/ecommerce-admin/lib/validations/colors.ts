import { z } from 'zod';

export const colorSchema = z.object({
  name: z.string().nonempty("Name can't be empty"),
  value: z.string().nonempty("Value can't be empty"),
});

export type ColorSchema = z.infer<typeof colorSchema>;
