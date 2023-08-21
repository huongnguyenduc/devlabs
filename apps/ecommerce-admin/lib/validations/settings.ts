import { z } from 'zod';

export const settingsSchema = z.object({
  name: z.string().min(3).max(255),
});

export type SettingsSchema = z.infer<typeof settingsSchema>;
