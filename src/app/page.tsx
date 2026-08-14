import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ArrowBigLeft } from 'lucide-react';
export default function Home() {
  return (
    <div className="flex w-1/3 flex-col self-center flex-1 items-center justify-center ">
      <Field>
        <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
        <Input
          icon={ArrowBigLeft}
          id="input-field-username"
          type="text"
          placeholder="Enter your username"
        />
        <FieldDescription>Choose a unique username for your account.</FieldDescription>
      </Field>
    </div>
  );
}
