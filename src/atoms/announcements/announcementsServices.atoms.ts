import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";
import { Announcement_Service } from "./announcements.atoms";

export type AnnounceServicesData = {
  id: number;
  title: string;
  price: number;
  status: {
    id: number;
    title: Announcement_Service;
  };
};

export const announcementsServicesAtom = atom(async () => {
  try {
    const { data } = await baseGetRequest<AnnounceServicesData[]>("announcement-services");
    return data;
  } catch (error) {
    return [];
  }
});
