import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export const CategoryAtom = atom<CategoryProps[]>([]);

export const headerCategories = atom(async () => {
  try {
    const { data } = await baseGetRequest<CategoryProps[]>("categories");
    return data;
  } catch (error) {
    return [];
  }
});
