import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";
import { Announce } from "./announcements.atoms";

export const activeAnnounceAtom = atom<null | number>(null);
export const recomendationAtom = atom(async (get) => {
  const activeId = get(activeAnnounceAtom);
  if (!activeId) return [];
  try {
    const { data } = await baseGetRequest<Announce[]>(
      `announcement/recommendations/${activeId}`
    );

    return data;
  } catch (error) {
    return [];
  }
});
