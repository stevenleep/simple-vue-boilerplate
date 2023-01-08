import { AxiosRequestConfig } from "axios";
import { OptionalContentType } from "@/helpers/http/axios/ContentType";

export type UnknownStringRecord = Record<string, string>;

export interface EnhancedAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers">,
    EnhancedRequestConfig {}

export interface EnhancedRequestConfig {
  headers: AxiosRequestConfig["headers"] & {
    Authorization?: string;
  } & UnknownStringRecord;
  requestType?: OptionalContentType;

  /**
   * 跳过Auth的拦截器
   */
  noAuth?: boolean;

  /**
   * cancelToken的id, 通过createRequestCancelId生成
   */
  cancelId?: string;

  /**
   * 延迟多少毫秒后取消请求
   */
  delay?: number;
}
