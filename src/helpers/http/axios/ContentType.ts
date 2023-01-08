export enum ContentType {
  JSON = "application/json;charset=UTF-8",
  FromUrlencoded = "application/x-www-form-urlencoded;charset=UTF-8",
  FromData = "multipart/form-data;charset=UTF-8",
  Text = "text/plain;charset=UTF-8",
  Stream = "application/octet-stream;charset=UTF-8",
}

export type OptionalContentType = keyof typeof ContentType;
export function getContentType<ContentTypeKeys extends OptionalContentType>(
  type: ContentTypeKeys,
): (typeof ContentType)[ContentTypeKeys] {
  return ContentType[type];
}
