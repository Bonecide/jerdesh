import toast from "react-hot-toast";
import { rentalFetchAuthorized } from "../utils";
import { handlerError } from "../utils/rentalFetch/errorHandler";

export const handleSubscribe = async (pricing_id: number) => {
  try {
    await rentalFetchAuthorized("subscribe", {
      method: "POST",
      body: {
        pricing_id,
      },
    });
    toast.success('Подписка успешно оформлена!')
    return 'success'
  } catch (error) {
    handlerError(error);
  }
};
