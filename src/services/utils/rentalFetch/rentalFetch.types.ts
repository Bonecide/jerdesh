export type Sort<T extends string> = Array<Partial<Record<T, "asc" | "desc">>>;

// eslint-disable-next-line
export type QueryParams = Record<string, any>;

export type Data = {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  contentType?: "application/json" | "multipart/form-data" | null;
  accessToken?: string;
  body?: Record<string, unknown> | FormData;
  signal?: AbortSignal;
  queryParams?: QueryParams;
};

export type RequestFunc = (
  path: string,
  data: Data,
  config?: RentalFetchConfig
) => Promise<Response>;

export type RentalFetchConfig = {
  isServer?: boolean;
};
