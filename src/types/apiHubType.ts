import { AxiosRequestHeaders } from 'axios';

export interface GetParams {
  endPoint: string;
  headers?: AxiosRequestHeaders;
  params?: Record<string, unknown>;
  refresh?: boolean;
}

export interface PostParams {
  endPoint: string;
  data?: unknown;
  headers?: AxiosRequestHeaders;
  refresh?: boolean;
}

export interface PutFileParams {
  endPoint: string;
  formData: FormData;
  headers?: AxiosRequestHeaders;
  refresh?: boolean;
}
