import { rentalFetchAuthorized } from "../utils";
import { handlerError } from "../utils/rentalFetch/errorHandler";

type ResponseData = {
  success: boolean;
  data: {
    pay_url: string;
  };
};
export const replenishBalance = async (id: number) => {
  try {
    const response = await rentalFetchAuthorized("replenish-balance", {
      method: "POST",
      body: {
        replenishment_amount_id: id,
      },
    });

    const data = (await response.json()) as ResponseData;
    return data.data.pay_url;
  } catch (error) {
    handlerError(error);
  }
};
