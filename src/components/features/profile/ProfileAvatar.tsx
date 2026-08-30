'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Pencil, UserRound } from 'lucide-react';

type ProfileAvatarProps = {
  name: string;
  profileImage: string | null;
  onImageChange: (image: string) => void;
  onImageError: (message: string) => void;
};

export function ProfileAvatar({
  name,
  profileImage,
  onImageChange,
  onImageError,
}: ProfileAvatarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onImageError('');

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
      onImageError('فرمت تصویر باید JPG، PNG یا WEBP باشد.');

      event.target.value = '';
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      onImageError('حجم تصویر نباید بیشتر از ۵ مگابایت باشد.');

      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result === 'string') {
        onImageChange(result);
      }
    };

    reader.readAsDataURL(file);

    event.target.value = '';
  };

  return (
    <div
      className="
        absolute
        right-1/2
        top-0
        z-10
        -translate-y-1/2
        translate-x-1/2
        lg:right-[48%]
      "
    >
      <div
        className="
          relative
          h-[138px]
          w-[138px]
          overflow-visible
          rounded-full
          border-[6px]
          border-white
          bg-[#EEF2F0]
          shadow-[0_5px_18px_rgba(31,41,55,0.12)]
          md:h-[170px]
          md:w-[170px]
        "
      >
        {/* Avatar */}
        <div className="relative h-full w-full overflow-hidden rounded-full">
          {profileImage ? (
            <Image
              src={profileImage}
              alt={`تصویر پروفایل ${name}`}
              fill
              priority
              sizes="(max-width: 768px) 138px, 170px"
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#EEF2F0]">
              <UserRound size={74} strokeWidth={1.25} className="text-[#81BFA4]" />
            </div>
          )}
        </div>

        {/* Edit Avatar */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="ویرایش تصویر پروفایل"
          title="ویرایش تصویر پروفایل"
          className="
            absolute
            bottom-1
            left-1
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border-[4px]
            border-white
            bg-[#C7F43D]
            text-[#1F2937]
            shadow-md
            transition-transform
            hover:scale-105
            active:scale-95
            md:h-11
            md:w-11
          "
        >
          <Pencil size={17} strokeWidth={2} />
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
