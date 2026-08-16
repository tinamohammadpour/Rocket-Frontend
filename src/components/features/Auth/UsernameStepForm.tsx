'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { UserRound } from 'lucide-react';

import { usernameStepSchema, UsernameStepType } from '@/schemas/authSchema';
import { useSignupStore } from '@/store/useSignupStore';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import PrimaryButton from '@/components/shared/PrimaryButton';

export function UsernameStepForm() {
  const router = useRouter();
  const setUsername = useSignupStore((s) => s.setUsername);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameStepType>({ resolver: zodResolver(usernameStepSchema) });

  const onSubmit = (data: UsernameStepType) => {
    setUsername(data.username);
    router.push('/home');
  };

  return (
    <>
      {/* <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
          ر
        </div>
        <span className="font-bold text-[#1F2937] text-lg">راکت</span>
      </div> */}

      <h1 className="font-bold text-[#1F2937] text-[clamp(1rem,5vw,1.6rem)] whitespace-nowrap mb-4 mt-5">
        نام کاربری
      </h1>
      <p className="font-medium text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] whitespace-nowrap md:mb-12 ">
        برای استفاده از راکت، نام کاربری خود را وارد کنید
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full md:mt-0 mt-10">
        <Field data-invalid={!!errors.username}>
          <FieldLabel htmlFor="username">نام کاربری</FieldLabel>
          <Input icon={UserRound} id="username" type="tel" dir="rtl" {...register('username')} />
          {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
        </Field>
        <PrimaryButton type="submit">ثبت نام</PrimaryButton>
      </form>
      <p className="text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] mr-1 mt-7">
        بین 5 تا 25 کارکتر باشد
      </p>
      <p className="text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] mr-1 mt-1">
        فقط حروف و اعداد انگلیسی و کارکتر _ مجاز است
      </p>
      <p className="text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] mr-1 mt-1">
        حداقل یک حرف انگلیسی داشته باشد
      </p>
      <p className="text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] mr-1 mt-1">بدون فاصله باشد</p>
    </>
  );
}
