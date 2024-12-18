import { useEffect, useRef } from "react";
import { useAtom, useAtomValue, WritableAtom } from "jotai";

import { usePathname } from "next/navigation";

export const useRefetchableAtom = <T>(
  atom: WritableAtom<Promise<T>, unknown[], unknown>
): Awaited<T> => {
  const [atomState, setAtom] = useAtom(atom);
  const isFirstFocus = useRef(true);

  const location = usePathname();

  useEffect(() => {
    if (!isFirstFocus.current) {
      setAtom();
    }
    isFirstFocus.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return atomState;
};
