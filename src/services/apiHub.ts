// src/services/apiHub.ts
import axios, { AxiosError } from 'axios';
import { useMutation, useQuery, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';
import { GetParams, PostParams, PutFileParams } from '@/types/apiHubType';
import generateErrorMessage from '@/lib/handleApiErrors';
import { useUserStore } from '@/store/useUserStore';

export const baseURL = process.env.NEXT_PUBLIC_API_URL || '';

const apiClient = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const { user } = useUserStore.getState();
    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error?.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  const { user, setUser } = useUserStore.getState();
  if (!user?.refreshToken) return;

  try {
    const response = await apiClient.post('/v1/auth/refresh', {
      refreshToken: user.refreshToken,
    });
    const data = response.data;

    if (data) {
      setUser({
        firstName: data?.data?.firstName,
        lastName: data?.data?.lastName,
        permissions: data?.data?.permissions,
        accessToken: data?.data?.accessToken,
        refreshToken: data?.data?.refreshToken,
      });
    }
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in refresh token:', error);
    throw error;
  }
};

// --- Core request functions ---

export const getData = async ({ endPoint, headers, params, refresh = true }: GetParams) => {
  if (refresh) await refreshToken();
  try {
    const response = await apiClient.get(endPoint, { params, headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in getData', error);
    throw error;
  }
};

export const postData = async ({ endPoint, data, headers, refresh = true }: PostParams) => {
  if (refresh) await refreshToken();
  try {
    const response = await apiClient.post(endPoint, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in postData', error);
    throw error;
  }
};

export const patchData = async ({ endPoint, data, headers, refresh = true }: PostParams) => {
  if (refresh) await refreshToken();
  try {
    const response = await apiClient.patch(endPoint, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in patchData', error);
    throw error;
  }
};

export const putData = async ({ endPoint, data, headers, refresh = true }: PostParams) => {
  if (refresh) await refreshToken();
  try {
    const response = await apiClient.put(endPoint, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in putData', error);
    throw error;
  }
};

export const putDataFile = async ({
  endPoint,
  formData,
  headers,
  refresh = true,
}: PutFileParams) => {
  if (refresh) await refreshToken();
  try {
    const response = await apiClient.put(endPoint, formData, {
      headers: { 'Content-Type': 'multipart/form-data', ...headers },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in putDataFile', error);
    throw error;
  }
};

export const deleteData = async ({ endPoint, data, headers, refresh = true }: PostParams) => {
  if (refresh) await refreshToken();
  try {
    const response = await apiClient.delete(endPoint, { data, headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string | string[] }>;
    generateErrorMessage(err)
      .split('\n')
      .filter(Boolean)
      .forEach((msg) => toast.error(msg));
    console.error('error in deleteData', error);
    throw error;
  }
};

// --- React Query hooks ---

export function useGetData<TData = unknown>(
  endPoint: string,
  headers?: GetParams['headers'],
  options?: Omit<UseQueryOptions<TData>, 'queryKey' | 'queryFn'>
) {
  return useQuery<TData>({
    queryKey: [endPoint],
    queryFn: () => getData({ endPoint, headers }),
    ...options,
  });
}

export function usePostData<TData = unknown>(
  options?: UseMutationOptions<TData, unknown, PostParams>
) {
  return useMutation({
    mutationFn: (params: PostParams) => postData(params),
    ...options,
  });
}

export function usePatchData<TData = unknown>(
  options?: UseMutationOptions<TData, unknown, PostParams>
) {
  return useMutation({
    mutationFn: (params: PostParams) => patchData(params),
    ...options,
  });
}

export function usePutData<TData = unknown>(
  options?: UseMutationOptions<TData, unknown, PostParams>
) {
  return useMutation({
    mutationFn: (params: PostParams) => putData(params),
    ...options,
  });
}

export function useDeleteData<TData = unknown>(
  options?: UseMutationOptions<TData, unknown, PostParams>
) {
  return useMutation({
    mutationFn: (params: PostParams) => deleteData(params),
    ...options,
  });
}
