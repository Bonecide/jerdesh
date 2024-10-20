import toast from "react-hot-toast";
import { getFirstError, HandleError } from "./handleResponse";

export const handlerError = (error: unknown) => {
  const errors = error as HandleError;

  if (!errors.error && !errors.errors) return null;
  if (errors.error) return toast.error(errors.error);

  const firstError = getFirstError(errors.errors);

  if (firstError) {
    toast.error(Array.isArray(firstError) ? firstError[0] : firstError);
  }
};
