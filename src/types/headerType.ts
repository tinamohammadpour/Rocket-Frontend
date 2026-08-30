import type { Dispatch, SetStateAction } from 'react';

export interface LogoutConfirmationDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onConfirm: () => void;
}
