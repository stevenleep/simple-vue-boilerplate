import { AxiosInstance, AxiosResponse } from "axios";
import { errorHandler } from "./errorHandler";
import { removeCancelToken } from "./Cancel";
import { EnhancedAxiosRequestConfig } from "@/helpers/http";

export function setResponseInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      shouldRemoveCancelToken(response.config as EnhancedAxiosRequestConfig);
      return response;
    },
    (error) => {
      shouldRemoveCancelToken(error.config as EnhancedAxiosRequestConfig);
      return errorHandler(error);
    },
  );
}

function shouldRemoveCancelToken(config: EnhancedAxiosRequestConfig) {
  const cancelable = config.cancelId && config.cancelToken?.promise;
  if (cancelable) {
    removeCancelToken(config.cancelId as string);
  }
}
