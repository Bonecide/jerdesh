import { BASE_API_URL } from "@/utils/const/env";
import { buildBody } from "./buildBody";
import { buildHeaders } from "./buildHeaders";
import { buildQueryParams } from "./buildQueryParams";
import { handleResponse } from "./handleResponse";
import { Data, RentalFetchConfig } from "./rentalFetch.types";
import { isServer, REVALIDATE } from "@/utils/const/http";

export const rentalFetch = async (
  path: string,
  data: Data,
  config?: RentalFetchConfig
) => {
  const queryParams = buildQueryParams(data);

  const url = `${BASE_API_URL}/${path}${queryParams}`;

  const response = isServer
    ? await fetch(url, {
        method: data.method,
        headers: await buildHeaders(data),
        body: buildBody(data),
        signal: data.signal,
        cache: config?.noCache ? "no-cache" : "default",
        next: {
          revalidate: REVALIDATE,
        },
      })
    : await fetch(url, {
        method: data.method,
        headers: await buildHeaders(data),
        body: buildBody(data),
        signal: data.signal,
      });

  return await handleResponse(response);
};
