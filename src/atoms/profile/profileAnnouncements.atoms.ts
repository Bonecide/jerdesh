import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";
import { Announce } from "../announcements";
import { refetchableAtom } from "@/utils/helpers/refetchableAtom";

export const profileAnnouncementsAtom = refetchableAtom(async () => {
  try {
    const { data } = await baseGetRequest<Announce[]>("my-announcements");

    return data;
  } catch (error) {
    return [];
  }
});
