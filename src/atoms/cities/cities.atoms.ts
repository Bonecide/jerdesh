import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export type City = {
  title: string;
  id: number;
  slug: string;
};

export const citiesAtom = atom(async () => {
  try {
    const { data } = await baseGetRequest<City[]>("cities");

    return data;
  } catch (error) {
    return [];
  }
});
