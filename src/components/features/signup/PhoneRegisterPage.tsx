import { AuthImagePanel } from '@/components/features/signup/AuthImagePadel';
import { PhoneStepForm } from '@/components/features/signup/PhoneStepForm';

export default function PhonePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 md:px-4 md:py-10">
      <div className="w-full max-w-5xl bg-white rounded-[24px] md:rounded-[32px] shadow-xl p-4 sm:p-6 md:p-10">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-6 md:gap-16">
          <div className="hidden md:block">
            <AuthImagePanel />
          </div>
          <div className="w-full md:w-1/2 flex flex-col self-center justify-center">
            <PhoneStepForm />
          </div>
        </div>
      </div>
    </div>
  );
}
