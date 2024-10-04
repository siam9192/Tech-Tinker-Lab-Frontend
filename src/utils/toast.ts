import { toast } from 'sonner';

export function successToast(message: string, duration?: number) {
  toast.success(message, { duration: duration || 2000 });
}

export function errorToast(message: string, duration?: number) {
  toast.error(message, { duration: duration || 2000 });
}
