import { atomWithStorage } from "jotai/utils";

export const isAuthAtom = atomWithStorage("isAuth", false, undefined, {
  getOnInit: true,
});

export const accesTokenAtom = atomWithStorage("token", "", undefined, {
  getOnInit: true,
});
