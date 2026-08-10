import { z } from 'zod';

export const loginSchema = z.object({
  password: z
    .string()
    .min(1, 'this field cant be empty')
    .min(8, 'password must be atleast 8 characters'),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
