// services/api/auth.service.ts
import { apiClient } from './apiHub';
import type { RequestOtpResponse, VerifyOtpResponse } from '@/types/authType';

interface ApiEnvelope<T> {
  data: T;
}

export const authService = {
  requestOtp: (phone: string) =>
    apiClient.post<ApiEnvelope<RequestOtpResponse>>('api/auth/request-otp', { phone }),

  verifyOtp: (phone: string, code: string) =>
    apiClient.post<ApiEnvelope<VerifyOtpResponse>>('api/auth/verify-otp', { phone, code }),

  // TODO: هنوز endpoint واقعی مشخص نیست — منتظر مشخصات بک‌اند برای این بخش
  completeProfile: (username: string) =>
    apiClient.post<ApiEnvelope<{ user: unknown }>>('/auth/complete-profile', { username }),
};
