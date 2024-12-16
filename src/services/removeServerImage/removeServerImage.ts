import toast from "react-hot-toast";
import { rentalFetchAuthorized } from "../utils";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const removeServerImage = async (id: number) => {
  try {
    await rentalFetchAuthorized(`announcement/image/${id}`, {
      method: "DELETE",
    });
    toast.success("Картинка успешно удалена!");
  } catch (error) {
    handlerError(error);
  }
};
