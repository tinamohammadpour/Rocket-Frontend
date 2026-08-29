'use client';

import { BarChart3, CalendarDays, Phone, UserRound } from 'lucide-react';

type ProfileDetailsProps = {
  phone: string;
  username: string;
  level: string;
  joinedAt: string;
};

export function ProfileDetails({ phone, username, level, joinedAt }: ProfileDetailsProps) {
  return (
    <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
      {/* Phone */}
      <div
        className="
          group
          flex
          min-h-[104px]
          items-center
          justify-between
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-white
          px-5 py-5
          transition-all
          duration-200
          hover:border-[#81BFA4]/50
          hover:shadow-[0_6px_20px_rgba(31,41,55,0.05)]
          md:px-6
        "
      >
        <div>
          <p className="text-[13px] font-normal text-[#6B7280]">شماره تلفن همراه</p>

          <p dir="ltr" className="mt-2.5 text-right text-[15px] font-semibold text-[#1F2937]">
            {phone}
          </p>
        </div>

        <div
          className="
            flex
            h-12 w-12
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            bg-[#DCE3DF]/60
            text-[#4D8F77]
            transition-colors
            group-hover:bg-[#DCE3DF]
          "
        >
          <Phone size={21} strokeWidth={1.7} />
        </div>
      </div>

      {/* Username */}
      <div
        className="
          group
          flex
          min-h-[104px]
          items-center
          justify-between
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-white
          px-5 py-5
          transition-all
          duration-200
          hover:border-[#81BFA4]/50
          hover:shadow-[0_6px_20px_rgba(31,41,55,0.05)]
          md:px-6
        "
      >
        <div>
          <p className="text-[13px] font-normal text-[#6B7280]">نام کاربری</p>

          <p dir="ltr" className="mt-2.5 text-right text-[15px] font-semibold text-[#1F2937]">
            {username}
          </p>
        </div>

        <div
          className="
            flex
            h-12 w-12
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            bg-[#DCE3DF]/60
            text-[#4D8F77]
            transition-colors
            group-hover:bg-[#DCE3DF]
          "
        >
          <UserRound size={21} strokeWidth={1.7} />
        </div>
      </div>

      {/* Level */}
      <div
        className="
          group
          flex
          min-h-[104px]
          items-center
          justify-between
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-white
          px-5 py-5
          transition-all
          duration-200
          hover:border-[#81BFA4]/50
          hover:shadow-[0_6px_20px_rgba(31,41,55,0.05)]
          md:px-6
        "
      >
        <div>
          <p className="text-[13px] font-normal text-[#6B7280]">سطح کاربری</p>

          <p className="mt-2.5 text-[15px] font-semibold text-[#1F2937]">{level}</p>
        </div>

        <div
          className="
            flex
            h-12 w-12
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            bg-[#DCE3DF]/60
            text-[#4D8F77]
            transition-colors
            group-hover:bg-[#DCE3DF]
          "
        >
          <BarChart3 size={21} strokeWidth={1.7} />
        </div>
      </div>

      {/* Join Date */}
      <div
        className="
          group
          flex
          min-h-[104px]
          items-center
          justify-between
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-white
          px-5 py-5
          transition-all
          duration-200
          hover:border-[#81BFA4]/50
          hover:shadow-[0_6px_20px_rgba(31,41,55,0.05)]
          md:px-6
        "
      >
        <div>
          <p className="text-[13px] font-normal text-[#6B7280]">تاریخ عضویت</p>

          <p dir="ltr" className="mt-2.5 text-right text-[15px] font-semibold text-[#1F2937]">
            {joinedAt}
          </p>
        </div>

        <div
          className="
            flex
            h-12 w-12
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            bg-[#DCE3DF]/60
            text-[#4D8F77]
            transition-colors
            group-hover:bg-[#DCE3DF]
          "
        >
          <CalendarDays size={21} strokeWidth={1.7} />
        </div>
      </div>
    </div>
  );
}
