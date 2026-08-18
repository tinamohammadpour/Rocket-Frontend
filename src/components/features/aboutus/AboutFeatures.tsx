import { CalendarCheck, RefreshCcw, ShieldCheck, Headset } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';

const features = [
  { icon: CalendarCheck, title: 'رزرو آنی', desc: 'در چند ثانیه زمین موردنظرتان را رزرو کنید.' },
  {
    icon: RefreshCcw,
    title: 'لغو و بازگشت وجه',
    desc: 'در صورت انصراف، هزینه‌ی رزرو به‌طور کامل بازمی‌گردد.',
  },
  {
    icon: ShieldCheck,
    title: 'پرداخت امن',
    desc: 'تمام تراکنش‌ها با بالاترین استاندارد امنیتی انجام می‌شود.',
  },
  { icon: Headset, title: 'پشتیبانی ۲۴ ساعته', desc: 'تیم پشتیبانی راکت همیشه پاسخگوی شماست.' },
];

export function AboutFeatures() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">چرا راکت؟</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            ما تجربه‌ی رزرو زمین پدل را ساده، شفاف و بدون دغدغه کرده‌ایم.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
