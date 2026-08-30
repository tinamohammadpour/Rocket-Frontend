'use client';

import { X as XIcon } from 'lucide-react';
import type { ProfileFormData, ProfileFormErrors } from '@/types/userProfileType';

type EditProfileModalProps = {
  isOpen: boolean;
  phone: string;
  formData: ProfileFormData;
  formErrors: ProfileFormErrors;
  onNameChange: (value: string) => void;
  onUsernameChange: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
};

export function EditProfileModal({
  isOpen,
  phone,
  formData,
  formErrors,
  onNameChange,
  onUsernameChange,
  onSave,
  onClose,
}: EditProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/30
        px-4
        backdrop-blur-[2px]
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[480px]
          rounded-[24px]
          bg-white
          p-6
          shadow-[0_20px_60px_rgba(31,41,55,0.18)]
          md:p-8
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن"
          className="
            absolute left-5 top-5
            flex h-9 w-9
            items-center justify-center
            rounded-full
            text-[#6B7280]
            transition-colors
            hover:bg-[#F3F4F6]
          "
        >
          <XIcon size={20} />
        </button>

        {/* Header */}
        <div className="mb-7">
          <h2 className="text-xl font-bold text-[#1F2937]">ویرایش پروفایل</h2>

          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            اطلاعات حساب کاربری خود را ویرایش کنید.
          </p>
        </div>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="profile-name" className="mb-2 block text-sm font-medium text-[#374151]">
              نام و نام خانوادگی
            </label>

            <input
              id="profile-name"
              type="text"
              value={formData.name}
              onChange={(event) => onNameChange(event.target.value)}
              className={`
                h-12 w-full
                rounded-xl
                border
                bg-white
                px-4
                text-sm
                text-[#1F2937]
                outline-none
                transition-colors
                ${
                  formErrors.name
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-[#E5E7EB] focus:border-[#81BFA4]'
                }
              `}
            />

            {formErrors.name && (
              <p role="alert" className="mt-2 text-xs text-red-500">
                {formErrors.name}
              </p>
            )}
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="profile-username"
              className="mb-2 block text-sm font-medium text-[#374151]"
            >
              نام کاربری
            </label>

            <input
              id="profile-username"
              dir="ltr"
              type="text"
              value={formData.username}
              onChange={(event) => onUsernameChange(event.target.value)}
              className={`
                h-12 w-full
                rounded-xl
                border
                bg-white
                px-4
                text-left
                text-sm
                text-[#1F2937]
                outline-none
                transition-colors
                ${
                  formErrors.username
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-[#E5E7EB] focus:border-[#81BFA4]'
                }
              `}
            />

            {formErrors.username && (
              <p role="alert" className="mt-2 text-xs text-red-500">
                {formErrors.username}
              </p>
            )}

            <p className="mt-2 text-xs leading-5 text-[#9CA3AF]">
              نام کاربری باید ۵ تا ۲۵ کاراکتر و شامل حروف انگلیسی، اعداد یا علامت _ باشد.
            </p>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="profile-phone"
              className="mb-2 block text-sm font-medium text-[#374151]"
            >
              شماره تلفن همراه
            </label>

            <input
              id="profile-phone"
              dir="ltr"
              type="text"
              value={phone}
              readOnly
              className="
                h-12 w-full
                cursor-not-allowed
                rounded-xl
                border border-[#E5E7EB]
                bg-[#F5F7F2]
                px-4
                text-left
                text-sm
                text-[#9CA3AF]
                outline-none
              "
            />

            <p className="mt-2 text-xs text-[#9CA3AF]">
              تغییر شماره تلفن همراه در حال حاضر امکان‌پذیر نیست.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={onSave}
            className="
              flex h-12 flex-1
              items-center justify-center
              rounded-xl
              bg-[#C7F43D]
              px-5
              text-sm font-semibold
              text-[#1F2937]
              transition-all
              hover:brightness-95
              active:scale-[0.98]
            "
          >
            ذخیره تغییرات
          </button>

          <button
            type="button"
            onClick={onClose}
            className="
              flex h-12 flex-1
              items-center justify-center
              rounded-xl
              border border-[#E5E7EB]
              bg-white
              px-5
              text-sm font-medium
              text-[#6B7280]
              transition-colors
              hover:bg-[#F5F7F2]
            "
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}
