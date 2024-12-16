import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";
import { Announce } from "../announcements";

export const profileAnnouncementsAtom = atom(async () => {
  try {
    const { data } = await baseGetRequest<Announce[]>("my-announcements");

    return data;
  } catch (error) {
    return [];
  }
});
