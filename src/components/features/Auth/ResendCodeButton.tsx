'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ResendCodeButton({ onResend }: { onResend: () => void }) {
  const [seconds, setSeconds] = useState(60);
  const isDisabled = seconds > 0;

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const handleResend = () => {
    onResend();
    setSeconds(60);
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
          : 'cursor-pointer text-[#2563EB] animate-pulse '
      )}
    >
      {isDisabled ? `ارسال مجدد کد تا ${seconds} ثانیه دیگر` : 'ارسال مجدد کد'}
    </button>
  );
}
