'use client';

import { BadgeCheck, BarChart3, Pencil } from 'lucide-react';

type ProfileHeaderProps = {
  name: string;
  username: string;
  level: string;
  onEdit: () => void;
};

export function ProfileHeader({ name, username, level, onEdit }: ProfileHeaderProps) {
  return (
    <div
      className="
        grid
        gap-8
        pt-24
        lg:grid-cols-[1fr_190px_1fr]
        lg:items-start
        lg:pt-10
      "
    >
      {/* User Information */}
      <div className="text-center lg:col-start-1 lg:text-right">
        {/* Name */}
        <div className="flex items-center justify-center gap-2 lg:justify-start">
          <BadgeCheck size={22} strokeWidth={2} className="shrink-0 text-[#A8D900]" />

          <h1 className="text-[26px] font-bold leading-tight text-[#1F2937] md:text-[30px]">
            {name}
          </h1>
        </div>

        {/* Username */}
        <p
          dir="ltr"
          className="
            mt-2
            text-center
            text-sm
            font-medium
            text-[#6B7280]
            lg:text-right
          "
        >
          @{username}
        </p>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-4
            max-w-[360px]
            text-sm
            leading-7
            text-[#6B7280]
            lg:mx-0
          "
        >
          اطلاعات حساب کاربری و پروفایل بازیکن شما در راکت
        </p>

        {/* Badges */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            lg:justify-start
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#E5E7EB]
              bg-white
              px-3 py-1.5
              text-xs
              font-medium
              text-[#6B7280]
            "
          >
            عضو راکت
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#DCE3DF]/65
              px-3 py-1.5
              text-xs
              font-medium
              text-[#4D8F77]
            "
          >
            <BarChart3 size={14} strokeWidth={1.8} />
            سطح {level}
          </span>
        </div>
      </div>

      {/* Edit Profile */}
      <div
        className="
          flex
          flex-col
          items-center
          lg:col-start-3
          lg:row-start-1
          lg:items-start
        "
      >
        <button
          type="button"
          onClick={onEdit}
          className="
            flex
            h-12
            w-full
            max-w-[230px]
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-[#81BFA4]
            bg-white
            px-6
            text-sm
            font-medium
            text-[#4D8F77]
            transition-all
            duration-200
            hover:bg-[#F5F7F2]
            active:scale-[0.98]
            lg:w-auto
          "
        >
          <Pencil size={18} strokeWidth={1.8} />
          ویرایش پروفایل
        </button>

        <p className="mt-4 max-w-[230px] text-center text-xs leading-6 text-[#9CA3AF]">
          اطلاعات شخصی و تنظیمات حساب کاربری خود را مدیریت کنید.
        </p>
      </div>
    </div>
  );
}
