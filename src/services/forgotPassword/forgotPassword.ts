import toast from "react-hot-toast";
import { handlerError } from "../utils/rentalFetch/errorHandler";
import { rentalFetch } from "../utils/rentalFetch/rentalFetch";
import { rentalFetchAuthorized } from "../utils";

type ForgotPasswordConfirmation = {
  code: string;
  email: string;
  password: string;
  password_confirmation: string;
};
export const forgotPassword = async (email: string) => {
  try {
    await rentalFetch("password-reset", {
      method: "POST",
      body: {
        email,
      },
    });
    toast.success("Мы отправили код подтверждения на вашу почту");
    return "success";
  } catch (error) {
    handlerError(error);
  }
};

export const forgotPasswordConfirm = async (
  data: ForgotPasswordConfirmation
) => {
  try {
    await rentalFetchAuthorized("password-reset/confirm", {
      method: "POST",
      body: data,
    });
    toast.success("Ваш пароль успешно изменён!");
    return "success";
  } catch (error) {
    handlerError(error);
  }
};
