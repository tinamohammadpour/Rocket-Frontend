import { z } from 'zod';
import { usernameStepSchema } from '@/schemas/authSchema';

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'نام و نام خانوادگی را وارد کنید.')
    .min(2, 'نام باید حداقل ۲ کاراکتر باشد.'),

  username: usernameStepSchema.shape.username,
});
