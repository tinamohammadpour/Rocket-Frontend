import { AuthImagePanel } from '@/components/features/signup/AuthImagePadel';
import { PhoneStepForm } from '@/components/features/signup/PhoneStepForm';

export default function PhonePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-xl p-6 md:p-5">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-18 mr-20">
          <AuthImagePanel />
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <PhoneStepForm />
          </div>
        </div>
      </div>
    </div>
  );
}
