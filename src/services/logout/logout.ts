import toast from "react-hot-toast";
import { rentalFetchAuthorized } from "../utils";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const logout = async () => {
  try {
    await rentalFetchAuthorized("logout", {
      method: "POST",
    });
    toast.success("Вы успешно вышли из аккаунта!");
    return "success";
  } catch (error) {
    handlerError(error);
  }
};
