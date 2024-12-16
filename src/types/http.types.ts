export type HttpHeader = {
  Authorization?: string;
  "Content-Type"?: string;
  accept?: string;
  "Accept-Language"?: string;
  Origin?: string;
  viewer_token?: string;
};

export type TError = {
  message: string;
  status: number;
  statusText?: string;
};
