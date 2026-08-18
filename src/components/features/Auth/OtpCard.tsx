'use client';

import { createPortal } from 'react-dom';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ResendCodeButton } from './ResendCodeButton';

export default function OtpCard({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div className="min-h-dvh fixed inset-0 z-50 flex items-center sm:items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      />
      <div className="relative w-full max-w-md bg-white rounded-[24px] md:rounded-[32px] shadow-xl px-4 py-12 md:py-20 animate-[slide-up_0.35s_cubic-bezier(0.32,0.72,0,1)]">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex flex-col items-center justify-center">
            <InputOTP maxLength={6}>
              <InputOTPGroup className="gap-2">
                <InputOTPSlot index={0} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={1} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={2} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={3} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={4} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
                <InputOTPSlot index={5} className="w-10 h-12 sm:w-12 sm:h-14 text-lg" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="-mb-5">
            <ResendCodeButton
              onResend={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
