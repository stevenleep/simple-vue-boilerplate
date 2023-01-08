import { AxiosResponse } from "axios";

export function checkResponseCode(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.data.code === 0) {
    return response;
  }

  const error = new Error(response.data.msg || "Error");
  return Promise.reject(error);
}
