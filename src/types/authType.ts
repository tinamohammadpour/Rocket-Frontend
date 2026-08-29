export type UserRole = 'PLAYER' | 'VENUE_ADMIN' | 'SITE_ADMIN';

export interface AuthUser {
  id: number;
  phone: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  roles: UserRole;
  profile_completed: boolean;
}

export interface RequestOtpResponse {
  expires_in: number;
  resend_after: number;
}

export interface VerifyOtpResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  is_new_user: boolean;
  user: AuthUser;
}

export type AuthErrorCode = 'INVALID_OTP' | 'ACCOUNT_LOCKED' | 'ACCOUNT_DISABLED';

export interface ApiErrorResponse {
  code: AuthErrorCode;
  message?: string;
}
