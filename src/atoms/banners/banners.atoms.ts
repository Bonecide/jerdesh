import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export type Banner = {
  id: number;
  image: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  banner_type: BannersType;
  mobile_image: string;
  link?: string;
  status: {
    title: BannersType;
  };
};

export type BannersType =
  | "main_head"
  | "main_right"
  | "detail_right"
  | "detail_bottom";

export const bannersAtom = atom(async () => {
  try {
    const banners: Record<BannersType, Banner[]> = {
      detail_bottom: [],
      detail_right: [],
      main_head: [],
      main_right: [],
    };
    const { data } = await baseGetRequest<Banner[]>("advertising-banners");

    console.log(data);
    data.forEach((item) => {
      banners[item.status.title].push(item);
    });

    return banners;
  } catch (error) {
    return null;
  }
});
