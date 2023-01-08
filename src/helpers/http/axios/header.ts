import { getAuthorizationToken } from "@/helpers/auth";
import { getContentType } from "./ContentType";
import { EnhancedAxiosRequestConfig } from "./types";

export default function header(config: EnhancedAxiosRequestConfig): EnhancedAxiosRequestConfig {
  if (config.headers) {
    setHeaderContentType(config);
    setHeaderAuthorization(config);
  }
  return config;
}

function setHeaderContentType(config: EnhancedAxiosRequestConfig) {
  if (config.requestType) {
    config.headers!.setContentType = getContentType(config.requestType);
  }
}

function setHeaderAuthorization(config: EnhancedAxiosRequestConfig) {
  const token = getAuthorizationToken();
  if (!config.noAuth && token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
}
