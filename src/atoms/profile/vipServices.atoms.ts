import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";

export type VipService = {
  id: number;
  title: string;
  discount: number;
  ads_count: number;
  is_active: boolean;
  created_at: string | null;
  updated_at: string | null;
  pricing_vip_services: {
    id: number;
    day_count: number;
    price: number;
    vip_service_id: number;
    created_at: string | null;
    updated_at: string | null;
  }[];
};

export const vipSevicesAtom = atom<VipService[]>([]);
export const fetchVipSevicesAtom = atom(null, async (_, set) => {
  try {
    const { data } = await baseGetRequest<VipService[]>("vip-services");
    set(vipSevicesAtom, data);
  } catch (error) {}
});
