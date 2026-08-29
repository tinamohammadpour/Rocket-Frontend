import type { UserRole } from '@/types/authType';

export function getRoleRedirectPath(roles: UserRole) {
  if (roles.includes('SITE_ADMIN')) return '/admin/dashboard';
  if (roles.includes('VENUE_ADMIN')) return '/venue-admin/dashboard';
  return '/';
}
