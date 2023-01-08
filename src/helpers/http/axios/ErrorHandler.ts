import { AxiosError } from "axios";

export function errorHandler(error: AxiosError) {
  // 错误上报
  return Promise.reject(error);
}
