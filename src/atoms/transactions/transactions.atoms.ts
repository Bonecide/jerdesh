import { refetchableAtom } from "@/utils/helpers/refetchableAtom";
import { profileAtom } from "../profile";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";

export type Transaction = {
  id: number;
  service_name: string;
  total: number;
  operation_type: "income" | "expense";
  status: string;
  created_at: string;
  updated_at: string;
};
export const transactionsAtom = refetchableAtom(async (get) => {
  const user = get(profileAtom);

  try {
    const { data } = await baseGetRequest<Transaction[]>(
      `users/${user?.id}/transactions`
    );

    return data;
  } catch (error) {
    return [];
  }
});
