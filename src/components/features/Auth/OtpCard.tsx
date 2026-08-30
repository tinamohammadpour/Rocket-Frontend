'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ResendCodeButton } from './ResendCodeButton';
import { ApiErrorResponse, RequestOtpResponse } from '@/types/authType';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/store/useAuthStore';
import { setCookie } from '@/lib/cookies';
import { getRoleRedirectPath } from '@/lib/getRoleRedirectPath';
import { ERROR_MESSAGES } from '@/constants/otpError';
import { toast } from 'sonner';

export default function OtpCard({
  phonenumber,
  onClose,
  otpRequest,
}: {
  phonenumber: string;
  onClose: () => void;
  otpRequest: RequestOtpResponse;
}) {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const setSession = useAuthStore((s) => s.setSession);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (OTPCode: string) => {
    setError('');
    setIsVerifying(true);
    try {
      const res = await authService.verifyOtp(phonenumber, OTPCode);
      const { access_token, expires_in, user, is_new_user } = res.data.data;
      setSession(user, access_token);
      setCookie('session', access_token, expires_in);
      if (is_new_user) {
        router.push('/auth/username');
      } else {
        router.push(getRoleRedirectPath(user.roles));
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const apiError = err.response?.data as ApiErrorResponse | undefined;
        const message = apiError?.code
          ? ERROR_MESSAGES[apiError.code]
          : 'خطایی رخ داد، دوباره تلاش کنید.';
        setError(message);
        toast.error(message);
      }
      setOtp('');
    } finally {
      setIsVerifying(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      />
      <div className="relative w-full max-w-md bg-white rounded-[24px] md:rounded-[32px] shadow-xl px-4 py-12 md:py-20 animate-[slide-up_0.35s_cubic-bezier(0.32,0.72,0,1)]">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex flex-col items-center justify-center">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={setOtp}
              onComplete={handleVerify}
              disabled={isVerifying}
            >
              <InputOTPGroup className="gap-2">
                <InputOTPSlot index={0} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={1} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={2} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={3} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={4} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={5} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
              </InputOTPGroup>
            </InputOTP>
            {error && <p className="text-sm text-destructive text-center mt-3">{error}</p>}
            {isVerifying && (
              <p className="text-sm text-[#6B7280] text-center mt-3">در حال بررسی کد...</p>
            )}
          </div>
          <div className="-mb-5">
            <ResendCodeButton
              resendTime={otpRequest.resend_after}
              onResend={() => authService.requestOtp(phonenumber)}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
