import { Check, Clock3 } from 'lucide-react';

import type { CourtSlot } from '@/types/slotType';
import PrimaryButton from '@/components/shared/PrimaryButton';

type SlotCardProps = {
  slot: CourtSlot;
  isSelected: boolean;
  onSelect: (slot: CourtSlot) => void;
};

export function SlotCard({ slot, isSelected, onSelect }: SlotCardProps) {
  const isAvailable = slot.status === 'available';

  return (
    <div
      className={`rounded-2xl border bg-white p-4 transition-all ${
        isSelected ? 'border-[#2563EB] ring-2 ring-[#2563EB]/10' : 'border-gray-100'
      } ${!isAvailable ? 'opacity-60' : ''}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-[#2563EB]" />

          <span dir="ltr" className="font-bold text-[#1F2937]">
            {slot.startTime} - {slot.endTime}
          </span>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isAvailable ? 'bg-green-50 text-[#10B981]' : 'bg-gray-100 text-[#6B7280]'
          }`}
        >
          {isAvailable ? 'آزاد' : 'رزرو شده'}
        </span>
      </div>

      <div className="mb-4 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#6B7280]">هزینه سانس</span>

          <span className="text-sm font-bold text-[#2563EB]">
            {slot.price.toLocaleString('fa-IR')} تومان
          </span>
        </div>
      </div>

      <PrimaryButton
        type="button"
        disabled={!isAvailable}
        onClick={() => onSelect(slot)}
        className={isSelected ? 'bg-[#10B981] shadow-none' : undefined}
      >
        {isAvailable ? (isSelected ? 'انتخاب شده' : 'انتخاب سانس') : 'غیرقابل رزرو'}
      </PrimaryButton>

      {isSelected && (
        <div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium text-[#10B981]">
          <Check className="h-4 w-4" />
          این سانس انتخاب شده است
        </div>
      )}
    </div>
  );
}
