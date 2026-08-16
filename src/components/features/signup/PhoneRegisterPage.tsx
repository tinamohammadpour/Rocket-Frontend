import { AuthImagePanel } from '@/components/features/signup/AuthImagePadel';
import { PhoneStepForm } from '@/components/features/signup/PhoneStepForm';

export default function PhonePage() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-16 w-full max-w-5xl mx-auto px-4 py-1">
      <AuthImagePanel />
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <PhoneStepForm />
      </div>
    </div>
  );
}
