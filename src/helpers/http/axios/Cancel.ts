import axios, { AxiosError, CancelTokenSource } from "axios";
import { nanoid } from "nanoid";
import { EnhancedAxiosRequestConfig } from "./types";

export const cancelableManager = new Map<string, Cancel>();

export default class Cancel {
  private readonly source: CancelTokenSource;

  public cancelId: string = "";

  public currentRequestTaskContext = {};

  constructor(cancelId: string, context = {}) {
    this.source = axios.CancelToken.source();

    this.cancelId = this.initializeCancelId(cancelId);

    this.currentRequestTaskContext = context;

    // Add this source to the cancelableManager
    cancelableManager.set(this.cancelId, this);
  }

  public initializeCancelId(cancelId?: string) {
    return cancelId || nanoid();
  }

  public getCancelId() {
    return this.cancelId;
  }

  public static cancelAll(message: string = "") {
    cancelAll(message);
  }

  public get cancelToken() {
    return this.source.token;
  }

  public cancel(message: string = "") {
    this.source.cancel(message);
  }

  public static isCancel(error: AxiosError) {
    return axios.isCancel(error);
  }

  public static getCancelMessage(message: string = "") {
    return `Request canceled: ${message || "No message provided"}`;
  }
}

/**
 * Apis
 */

export function createCancelToken(cancelId: string, context = {}) {
  return new Cancel(cancelId, context);
}
export function cancelAll(message: string = "") {
  cancelableManager.forEach((source) => {
    source.cancel(message);
  });
}
export function applyCancelRequestById(cancelId: string, message: string = "") {
  return cancelableManager.get(cancelId)?.cancel(message);
}
export function createRequestCancelId() {
  return nanoid();
}
export function removeCancelToken(cancelId: string) {
  cancelableManager.delete(cancelId);
}

/**
 * request middleware
 */
export function createCancel(config: EnhancedAxiosRequestConfig): EnhancedAxiosRequestConfig {
  if (config.cancelId) {
    config.cancelToken = createCancelToken(config.cancelId, config).cancelToken;
  }
  return config;
}
