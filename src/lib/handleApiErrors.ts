import { AxiosError } from 'axios';

export default function generateErrorMessage(
  error: AxiosError<{ message?: string | string[] }>
): string {
  if (error?.response?.data?.message) {
    const message = error.response.data.message;
    return Array.isArray(message) ? message.join('\n') : message;
  }
  if (error?.response) {
    return 'خطایی از سمت سرور رخ داد';
  }
  if (error?.request) {
    return 'پاسخی از سرور دریافت نشد. اتصال اینترنت را بررسی کنید';
  }
  return 'خطایی در ارسال درخواست رخ داد';
}
