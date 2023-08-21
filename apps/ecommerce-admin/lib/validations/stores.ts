import { z } from 'zod';

export const storeSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
});

export type StoreSchema = z.infer<typeof storeSchema>;
