'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone } from 'lucide-react';

import { phoneStepSchema, type PhoneStepType } from '@/schemas/authSchema';
import { useSignupStore } from '@/store/useSignupStore';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Link from 'next/link';

export function PhoneStepForm() {
  const router = useRouter();
  const setPhonenumber = useSignupStore((s) => s.setPhonenumber);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneStepType>({ resolver: zodResolver(phoneStepSchema) });

  const onSubmit = (data: PhoneStepType) => {
    setPhonenumber(data.phonenumber);
    router.push('/signup/username');
  };

  return (
    <>
      {/* <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
          ر
        </div>
        <span className="font-bold text-[#1F2937] text-lg">راکت</span>
      </div> */}

      <h1 className="font-bold text-[#1F2937] text-[clamp(1rem,5vw,1.6rem)] whitespace-nowrap mb-4">
        به راکت خوش آمدید
      </h1>
      <p className="font-medium text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] whitespace-nowrap mb-12">
        برای شروع، شماره موبایل خود را وارد کنید
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
        <Field data-invalid={!!errors.phonenumber}>
          <FieldLabel htmlFor="phonenumber">شماره موبایل</FieldLabel>
          <Input
            placeholder="09xx xxx xxxx"
            icon={Phone}
            id="phonenumber"
            type="tel"
            dir="rtl"
            {...register('phonenumber')}
          />
          {errors.phonenumber && (
            <p className="text-sm text-destructive">{errors.phonenumber.message}</p>
          )}
        </Field>
        <PrimaryButton icon={ArrowLeft} type="submit">
          دریافت کد تایید
        </PrimaryButton>
      </form>
      <p className="text-sm text-[#6B7280] mt-7">
        ورود شما به معنای پذیرش{' '}
        <Link href="/terms" className="text-[#84CC16] hover:underline">
          شرایط راکت
        </Link>{' '}
        و{' '}
        <Link href="/privacy" className="text-[#84CC16] hover:underline">
          قوانین حریم خصوصی
        </Link>{' '}
        است
      </p>
    </>
  );
}
