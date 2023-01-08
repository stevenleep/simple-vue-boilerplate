import { AxiosInstance } from "axios";
import { flow } from "@/helpers/flow";
import header from "./header";
import { createCancel } from "./Cancel";
import { errorHandler } from "./errorHandler";

const runRequestInterceptors = flow(header, createCancel);

export function setupRequestInterceptor(instance: AxiosInstance) {
  return instance.interceptors.request.use((config) => {
    return runRequestInterceptors(config);
  }, errorHandler);
}
