'use client';

import { AlertDialog } from '@base-ui/react/alert-dialog';
import { LogOut } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LogoutConfirmationDialogProps } from '@/types/headerType';

export function LogoutConfirmationDialog({
  open,
  onOpenChange,
  onConfirm,
}: LogoutConfirmationDialogProps) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/45 backdrop-blur-[2px] transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />

        <AlertDialog.Viewport className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center p-4">
          <AlertDialog.Popup
            dir="rtl"
            className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 text-right shadow-2xl outline-none transition-[transform,opacity] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <LogOut className="size-6" aria-hidden="true" />
            </div>

            <AlertDialog.Title className="text-lg font-bold text-[#1F2937]">
              از حساب کاربری خارج می‌شوید؟
            </AlertDialog.Title>

            <AlertDialog.Description className="mt-2 text-sm leading-6 text-[#6B7280]">
              با تأیید خروج، برای ورود دوباره باید شماره تلفن خود را وارد کنید.
            </AlertDialog.Description>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <AlertDialog.Close
                type="button"
                className={cn(buttonVariants({ variant: 'outline' }), 'h-11')}
              >
                انصراف
              </AlertDialog.Close>

              <AlertDialog.Close
                type="button"
                onClick={onConfirm}
                className={cn(
                  buttonVariants({ variant: 'destructive' }),
                  'h-11 bg-red-600 text-white hover:bg-red-700'
                )}
              >
                خروج
              </AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Viewport>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
