'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ResendCodeButton({
  onResend,
  resendTime,
}: {
  onResend: () => void;
  resendTime: number;
}) {
  const [seconds, setSeconds] = useState(resendTime);
  const isDisabled = seconds > 0;

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const handleResend = () => {
    onResend();
    setSeconds(resendTime);
  };

  return (
    <button
      key={isDisabled ? 'counting' : 'active'}
      type="button"
      onClick={handleResend}
      disabled={isDisabled}
      className={cn(
        'font-medium py-2 px-4 rounded-[12px] bg-transparent text-[#6B7280] transition-colors',
        isDisabled
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer text-[#2563EB] animate-pulse [animation-iteration-count:2]'
      )}
    >
      {isDisabled ? `ارسال مجدد کد تا ${seconds} ثانیه دیگر` : 'ارسال مجدد کد'}
    </button>
  );
}
