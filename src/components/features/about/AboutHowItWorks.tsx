import { Reveal } from '@/components/shared/Reveal';

const steps = [
  {
    num: '۱',
    title: 'انتخاب زمین',
    desc: 'زمین موردنظر خود را از بین مجموعه‌های ثبت‌شده انتخاب کنید.',
  },
  { num: '۲', title: 'رزرو و پرداخت', desc: 'زمان مناسب را انتخاب و به‌صورت آنلاین پرداخت کنید.' },
  {
    num: '۳',
    title: 'بازی کنید',
    desc: 'در زمان رزروشده به زمین مراجعه کنید و بازی را شروع کنید.',
  },
  {
    num: '۴',
    title: 'لغو در صورت نیاز',
    desc: 'در صورت انصراف، رزرو را لغو و وجه خود را دریافت کنید.',
  },
];

export function AboutHowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937]">رزرو در ۴ قدم ساده</h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 120} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1F2937] text-[#84CC16] flex items-center justify-center font-bold text-lg mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-[#1F2937] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
