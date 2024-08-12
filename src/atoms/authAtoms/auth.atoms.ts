import { atomWithStorage } from "jotai/utils";

export const isAuthAtom = atomWithStorage("isAuth", false, undefined, {
  getOnInit: true,
});
