import { handlerError } from "../utils/rentalFetch/errorHandler";
import { rentalFetchAuthorized } from "../utils";

type FormValues = {
  email: string;
  password: string;
  password_confirmation: string;
};
export const register = async (values: FormValues) => {
  try {
    await rentalFetchAuthorized("register", {
      method: "POST",
      body: values,
    });

    return 'success'
  } catch (error) {
    handlerError(error);
  }
};
