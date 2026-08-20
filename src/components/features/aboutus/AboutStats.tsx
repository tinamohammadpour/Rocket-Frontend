import { AnimatedCounter } from '@/components/shared/CounterUp';
import { Reveal } from '@/components/shared/Reveal';

const stats = [
  { label: 'زمین فعال', value: 120, suffix: '+' },
  { label: 'رزرو موفق', value: 25000, suffix: '+' },
  { label: 'کاربر فعال', value: 8000, suffix: '+' },
  { label: 'رضایت کاربران', value: 98, suffix: '%' },
];

export function AboutStats() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-2">
              <AnimatedCounter end={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm text-[#6B7280]">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
