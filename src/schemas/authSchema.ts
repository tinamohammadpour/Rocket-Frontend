import { z } from 'zod';

export const signupSchema = z.object({
  phonenumber: z
    .string()
    .min(1, 'پر کردن این فیلد الزامی است')
    .length(11, 'شماره تلفن باید ۱۱ رقم باشد')
    .regex(/^09/, 'شماره تلفن باید با ۰۹ شروع شود')
    .regex(/^\d+$/, 'شماره تلفن فقط می‌تواند شامل اعداد باشد'),

  username: z
    .string()
    .min(1, 'پر کردن این فیلد الزامی است')
    .min(5, 'نام کاربری باید حداقل ۵ کاراکتر باشد')
    .max(25, 'نام کاربری باید حداکثر ۲۵ کاراکتر باشد')
    .regex(/^[a-zA-Z0-9_]+$/, 'فقط حروف انگلیسی، اعداد و زیرخط (_) مجاز است')
    .regex(/[a-zA-Z]/, 'نام کاربری باید حداقل یک حرف انگلیسی داشته باشد')
    .refine((val) => !val.includes(' '), 'نام کاربری نباید دارای فاصله باشد'),
});

export type signupSchemaType = z.infer<typeof signupSchema>;
