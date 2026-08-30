import { Reveal } from '@/components/shared/Reveal';
import { steps } from '@/types/landingType';

export function StepsSection() {
  return (
    <section dir="rtl" className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Reveal>
        <h2 className="font-bold text-[#1F2937] text-2xl md:text-3xl mb-12 text-center">
          سه قدم تا بازی
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.number} delay={i * 120}>
              <div className="bg-white rounded-[20px] border border-gray-100 p-6 md:p-8 h-full shadow-lg transition-shadow">
                <span className="text-[#1F2937] font-bold text-lg">{step.number}</span>
                <div className="w-11 h-11 rounded-xl bg-[#2563EB]/10 flex items-center justify-center my-4">
                  <Icon className="h-5 w-5 text-[#2563EB]" />
                </div>
                <h3 className="font-bold text-[#1F2937] text-lg mb-2">{step.title}</h3>
                <p className="text-[#6B7280] text-sm leading-7">{step.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
