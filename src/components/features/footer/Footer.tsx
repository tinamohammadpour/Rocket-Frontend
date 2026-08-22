import Link from 'next/link';
import { Radar, Phone, Mail, MapPin, Send } from 'lucide-react';
import { quickAccess, support } from '@/constants/footerItems';

// function InstagramIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" className={className}>
//       <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
//       <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
//       <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
//     </svg>
//   );
// }

// const socials = [
//   { icon: InstagramIcon, href: 'https://instagram.com/raket', label: 'اینستاگرام' },
//   { icon: Send, href: 'https://t.me/raket', label: 'تلگرام' },
// ];

export function Footer() {
  return (
    <footer dir="rtl" className="bg-[#1F2937]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8">
          <div>
            <h3 className="text-[#F5F7F2] font-bold text-sm mb-5">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#9CA3AF] text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span dir="ltr" className="text-right">
                  ۰۲۱-۸۸۸۸۴۴۲۲
                </span>
              </li>
              <li className="flex items-start gap-2 text-[#9CA3AF] text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span dir="ltr" className="text-right">
                  support@raket.ir
                </span>
              </li>
              <li className="flex items-start gap-2 text-[#9CA3AF] text-sm leading-6">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>تهران، خیابان ولیعصر، برج سپهر</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#F5F7F2] font-bold text-sm mb-5">پشتیبانی</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#F5F7F2] font-bold text-sm mb-5">دسترسی سریع</h3>
            <ul className="space-y-3">
              {quickAccess.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-base text-[#F5F7F2]">راکت</span>
              {/* <span className="w-7 h-7 rounded-lg bg-[#84CC16] flex items-center justify-center">
                <Radar className="h-4 w-4 text-[#1F2937]" />
              </span> */}
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-7 max-w-xs">
              پلتفرم تخصصی رزرو آنلاین کورت‌های پدل در سراسر ایران. هدف ما آسون کردن دسترسی به یکی
              از سریع‌ترین و پرهیجان‌ترین ورزش‌های راکتی دنیاست.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-10 sm:mt-12 pt-8 border-t border-white/10">
          <p className="text-[#9CA3AF] text-xs">© ۱۴۰۳ راکت. تمامی حقوق مادی و معنوی محفوظ است.</p>
          {/* <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4 text-[#9CA3AF]" />
                </a>
              );
            })}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
