import { AuthErrorCode } from '@/types/authType';

export const ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  INVALID_OTP: 'کد وارد شده اشتباه یا منقضی شده است.',
  ACCOUNT_LOCKED:
    'به دلیل تلاش‌های ناموفق زیاد، حساب شما موقتاً قفل شده. کمی بعد دوباره امتحان کنید.',
  ACCOUNT_DISABLED: 'حساب کاربری شما مسدود شده است.',
};
