
import { HttpHeader } from "@/types/http.types";
import { Data } from "./rentalFetch.types";

export const buildHeaders = async ({ accessToken, contentType }: Data) => {
  const headers: HttpHeader = {};

  headers.accept = "*/*";

  if (contentType !== null) {
    headers["Content-Type"] = contentType || "application/json";
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return headers;
};
