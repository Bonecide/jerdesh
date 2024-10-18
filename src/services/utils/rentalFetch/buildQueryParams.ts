import queryString from "query-string";

import { Data } from "./rentalFetch.types";

export const buildQueryParams = ({ queryParams }: Data) => {
  return queryParams
    ? `?${queryString.stringify(queryParams || {}, {
        arrayFormat: "bracket",
      })}`
    : "";
};
