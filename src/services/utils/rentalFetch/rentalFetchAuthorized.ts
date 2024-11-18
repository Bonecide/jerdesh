import { isServer } from "@/utils/const/http";
import { rentalFetch } from "./rentalFetch";
import { Data, RentalFetchConfig } from "./rentalFetch.types";
import { withLogger } from "./withLogger";
import cookies from "js-cookie";

export const rentalFetchAuthorized = async (
  path: string,
  data: Omit<Data, "accessToken">,
  config?: RentalFetchConfig
) => {
  const token = config?.isServer   
    ? cookies.get("token")
    : JSON.parse(localStorage.getItem("token") || "null");

  const accessToken = token;

  return await withLogger(rentalFetch, path, { ...data, accessToken }, config);
};
