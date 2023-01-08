import axiosRetry from "axios-retry";
import { AxiosInstance } from "axios";

export function createRetryableInstance(instance: AxiosInstance) {
  return axiosRetry(instance);
}
