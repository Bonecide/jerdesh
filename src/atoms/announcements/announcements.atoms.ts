import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export type Announcement_Service = "raise" | "fix" | "color" | "border";
export type Announce = {
  id: number;
  title: string;
  slug: string;
  address: string;
  phone: string;
  description: string;
  user_id: { id: number; name: string; last_name: string; logo?: string };
  category: { id: number; title: string };
  subcategory: { id: number; title: string };
  subway: { id: number; title: string };
  images: {
    id: number;
    path: string;
  }[];
  views: number;
  created_at: string;
  updated_at: string;
  status: string;
  announcement_services: Announcement_Service[];
};

export type AnnounceDetails = {
  id: number;
  title: string;
  slug: string;
  address: string;
  phone: string;
  description: string;
  user_id: { id: number; name: string; last_name: string; logo?: string };
  category: { id: number; title: string };
  subcategory: { id: number; title: string };
  subway: { id: number; title: string };
  images: {
    id: number;
    path: string;
  }[];
  views: number;
  created_at: string;
  updated_at: string;
  status: string;
  announcement_services: Announcement_Service[];
};

export type AnnounceWithImages = Announce & {
  images: {
    id: number;
    path: string;
  }[];
};

export type AnnouncementsFilters = {
  category_id: null | number;
  sub_category_id: null | number;
  subway_id: null | number;
  search: string;
};
export const announcementsFiltersAtom = atom<AnnouncementsFilters>({
  category_id: null,
  sub_category_id: null,
  subway_id: null,
  search: "",
});

export const announcementsAtom = atom<null | Announce[]>(null);

export const setAnnouncementsAtom = atom(null, async (get, set) => {
  try {
    const filters = get(announcementsFiltersAtom);
    const response = await baseGetRequest<Announce[]>("announcement/get", {
      queryParams: filters,
    });

    const data = response.data;
    set(announcementsAtom, data);
  } catch (error) {
    return [];
  }
});
