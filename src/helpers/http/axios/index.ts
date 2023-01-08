import axios from "axios";
import { getEnvironmentWithDefault } from "@/helpers/environment";
import { setupRequestInterceptor } from "./requestInterceptor";
import { setResponseInterceptor } from "./responseInterceptor";
import { createRetryableInstance } from "./retry";
import { EnhancedRequestConfig } from "./types";

const instance = axios.create({
  baseURL: getEnvironmentWithDefault("VITE_BASE_SERVER_URL", ""),
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  responseEncoding: "utf8",
  xsrfHeaderName: "X-CSRF-TOKE",
});

createRetryableInstance(instance);
setupRequestInterceptor(instance);
setResponseInterceptor(instance);

export { instance as request };
export {
  createCancelToken,
  createRequestCancelId,
  applyCancelRequestById,
  cancelAll,
} from "./Cancel";
export { getContentType, ContentType } from "./ContentType";
export type { EnhancedAxiosRequestConfig } from "./types";
export type { OptionalContentType } from "./ContentType";

/**
 * 扩展AxiosRequestConfig类型定义
 */
declare module "axios" {
  export interface AxiosRequestConfig extends EnhancedRequestConfig {}
}
