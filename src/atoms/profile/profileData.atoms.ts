import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { atom } from "jotai";
import { isAuthAtom } from "../authAtoms";

export type Profile = {
  id: number;
  name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  balance: number;
  logo?: string;
  email_verified_at?: string;
  password: string;
  created_at: string;
  updated_at: string;
};

export const profileAtom = atom<Profile | null>(null);

export const fetchProfileAtom = atom(null, async (get, set) => {
  try {
    const { data } = await baseGetRequest<Profile>("profile");
    set(profileAtom, data);
  } catch (error) {
    set(isAuthAtom, false);
    return null;
  }
});
