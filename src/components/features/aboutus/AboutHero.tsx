import { Reveal } from '@/components/shared/Reveal';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#1F2937]">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2563EB]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#84CC16]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 md:py-32 text-center">
        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#84CC16] text-sm font-medium mb-6">
            درباره‌ی راکت
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6">
            رزرو زمین پدل، <span className="text-[#84CC16]">ساده و مطمئن</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            راکت جایی است که بازیکنان پدل، زمین بازی موردنظر خود را در چند ثانیه رزرو می‌کنند؛ با
            امکان لغو رزرو و بازگشت کامل وجه، بدون هیچ دغدغه‌ای.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
