import { Header } from '@/components/features/header/Header';
import { MobileHeader } from '@/components/features/header/MobileHeader';
import { MobileBottomNav } from '@/components/features/header/MobileBottomNav';

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileHeader />
      <MobileBottomNav />
      <main className="pt-14 md:pt-[85px] pb-16 md:pb-0 flex-1">{children}</main>
    </>
  );
}
