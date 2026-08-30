import { LucideIcon } from 'lucide-react';

export interface DashboardStats {
  todayReservations: number;
  monthlyRevenue: number;
  activeVenues: number;
  totalPlayers: number;
}

export interface RevenueTrendPoint {
  date: string;
  amount: number;
}

export interface RecentVenue {
  id: string;
  name: string;
  city: string;
  ownerPhone: string;
  addedAt: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}
