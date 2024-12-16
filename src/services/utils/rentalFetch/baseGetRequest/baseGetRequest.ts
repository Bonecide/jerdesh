import { QueryParams, RentalFetchConfig } from "../rentalFetch.types";
import { rentalFetchAuthorized } from "../rentalFetchAuthorized";

export type BaseGetRequestResType<T> = {
  data: T;
};

export type BaseGetRequest = {
  queryParams?: QueryParams;
  config?: RentalFetchConfig;
};

export const baseGetRequest = async <ReturnType>(
  path: string,
  options?: BaseGetRequest
): Promise<BaseGetRequestResType<ReturnType>> => {
  const response = await rentalFetchAuthorized(
    path,
    {
      method: "GET",
      queryParams: options?.queryParams,
    },
    options?.config
  );

  return await response.json();
};
