import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function OtpCard() {
  return (
    <div className="min-h-dvh flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[24px] md:rounded-[32px] shadow-xl px-4 py-12 md:py-20">
        <div className="flex flex-col items-center gap-4">
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
        </div>
      </div>
    </div>
  );
}
