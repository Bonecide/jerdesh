import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export type Subway = {
  id: number;
  title: string;
  slug: string;
};
export const subwaysAtom = atom(async () => {
  try {
    const { data } = await baseGetRequest<Subway[]>("subways");
    return data;
  } catch (error) {
    return [];
  }
});
