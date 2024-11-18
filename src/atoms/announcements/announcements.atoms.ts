import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export type Announce = {
  id: number;
  title: string;
  slug: string;
  address: string;
  phone: string;
  description: string;
  subway_id: number;
  category_id: number;
  sub_category_id: number;
  images: string[];
  views: number;
  created_at: string;
  updated_at: string;
  status: string;
};

export type AnnouncementsFilters = {
  category_id: null | number;
  sub_category_id: null | number;
  subway_id: null | number;
};
export const announcementsFiltersAtom = atom<AnnouncementsFilters>({
  category_id: null,
  sub_category_id: null,
  subway_id: null,
});

export const announcementsAtom = atom<null | Announce[]>(null);

export const setAnnouncementsAtom = atom(null, async (get, set) => {
  try {
    const filters = get(announcementsFiltersAtom);
    const { data } = await baseGetRequest<Announce[]>("announcement/get", {
      queryParams: filters,
    });
    set(announcementsAtom, data);
  } catch (error) {
    return [];
  }
});
