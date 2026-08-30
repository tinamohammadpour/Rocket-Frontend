import { VenueAdminSidebar } from '@/components/features/venue-admin/VenueAdminSidebar';

export default function VenueAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="flex min-h-screen">
      <VenueAdminSidebar />

      <main className="min-w-0 flex-1 pt-16 md:pt-0">{children}</main>
    </div>
  );
}
