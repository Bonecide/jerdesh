import { rentalFetchAuthorized } from "../utils";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const deleteAnnounce = async (id: number) => {
  try {
    await rentalFetchAuthorized(`announcement/delete/${id}`, {
      method: "DELETE",
    });

    return 'success'
  } catch (error) {
    handlerError(error);
  }
};
