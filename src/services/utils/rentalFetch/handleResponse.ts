import { TError } from "@/types/http.types";
import { isSuccess } from "../../utils/rentalFetch";

export type Errors = {
  [key: string]: string[];
};
export type HandleError = {
  errors: Errors;
  error?: string;
  message?: string;
};

export const getFirstError = (errors: Errors) => {
  for (const key of Object.keys(errors)) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      return errors[key][0].length > 1 ? errors[key][0] : errors[key];
    }
  }
  return null;
};
export const handleResponse = async (response: Response) => {
  if (isSuccess(response.status)) {
    return response;
  }

  const error: HandleError = await response.json();
  throw error;
};
