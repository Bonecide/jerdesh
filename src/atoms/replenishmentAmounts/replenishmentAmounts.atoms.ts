import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { refetchableAtom } from "@/utils/helpers/refetchableAtom";

export type Amount = {
  id: number;
  amount: number;
};
export const replenishmentAmountsAtom = refetchableAtom(async () => {
  try {
    const { data } = await baseGetRequest<Amount[]>("replenishment-amounts");

    return data;
  } catch (error) {
    return [];
  }
});
