import { HttpHeader } from "@/types/http.types";
import { Data } from "./rentalFetch.types";
import cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
export const buildHeaders = async ({ accessToken, contentType }: Data) => {
  const headers: HttpHeader = {};
  const viewer_token = cookies.get("viewer_token");
  headers.accept = "*/*";

  if (contentType !== null) {
    headers["Content-Type"] = contentType || "application/json";
  }
  if (viewer_token) {
    headers["viewer_token"] = viewer_token;
  } else {
    const newUuid = uuidv4();
    cookies.set("viewer_token", newUuid, {
      expires: 1,
    });
    headers["viewer_token"] = newUuid;
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  return headers;
};
