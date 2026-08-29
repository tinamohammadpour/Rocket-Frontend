'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { ArrowLeft, Phone } from 'lucide-react';

import { phoneStepSchema, type PhoneStepType } from '@/schemas/authSchema';
import { useSignupStore } from '@/store/useSignupStore';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import PrimaryButton from '@/components/shared/PrimaryButton';
import OtpCard from './OtpCard';
import Link from 'next/link';
import { authService } from '@/services/auth.service';
import type { RequestOtpResponse } from '@/types/authType';

export function PhoneStepForm() {
  const setPhonenumber = useSignupStore((s) => s.setPhonenumber);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [otpRequest, setOtpRequest] = useState<RequestOtpResponse | null>(null);
  const [submittedPhone, setSubmittedPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneStepType>({ resolver: zodResolver(phoneStepSchema) });

  const onSubmit = async (data: PhoneStepType) => {
    setServerError('');
    setIsSubmitting(true);
    try {
      const res = await authService.requestOtp(data.phonenumber);
      setPhonenumber(data.phonenumber);
      setSubmittedPhone(data.phonenumber);
      setOtpRequest(res.data.data);
      setIsOtpOpen(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        setServerError('ارسال کد با خطا مواجه شد. لطفاً دوباره تلاش کنید.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="font-bold text-[#1F2937] text-[clamp(1rem,5vw,1.6rem)] whitespace-nowrap mb-4 mt-5">
        به راکت خوش آمدید
      </h1>
      <p className="font-medium text-[clamp(0.5rem,2.5vw,1rem)] text-[#6B7280] whitespace-nowrap md:mb-12">
        برای شروع، شماره موبایل خود را وارد کنید
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full md:mt-0 mt-10">
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
          {serverError && <p className="text-sm text-destructive">{serverError}</p>}
        </Field>
        <PrimaryButton icon={ArrowLeft} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'در حال ارسال...' : 'دریافت کد تایید'}
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

      {isOtpOpen && otpRequest && (
        <OtpCard
          phonenumber={submittedPhone}
          otpRequest={otpRequest}
          onClose={() => setIsOtpOpen(false)}
        />
      )}
    </>
  );
}
