import toast from "react-hot-toast";
import { rentalFetchAuthorized } from "../utils";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const activeService = async ({
  announceId,
  serviceId,
}: {
  announceId: number;
  serviceId: number;
}) => {
  try {
    await rentalFetchAuthorized(
      `announcement/activate-service/${announceId}/${serviceId}`,
      {
        method: "POST",
      }
    );
    toast.success("Выполнено!");
    return "success";
  } catch (error) {
    handlerError(error);
  }
};
