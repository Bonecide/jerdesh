"use client";

import {
  announcementsFiltersAtom,
  setAnnouncementsAtom,
} from "@/atoms/announcements";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "nextjs-toploader/app";
import { useCallback } from "react";

export const Category = ({ item }: { item: CategoryProps }) => {
  const [filters, setFilters] = useAtom(announcementsFiltersAtom);
  const refetch = useSetAtom(setAnnouncementsAtom);
  const router = useRouter();

  const onClickCategory = useCallback(
    (id: number) => () => {
      setFilters((prev) => ({ ...prev, category_id: id }));
      refetch();
      router.push("/");
    },
    [setFilters, refetch, router]
  );
  return (
    <p
      onClick={onClickCategory(item.id)}
      className={`${
        filters.category_id === item.id ? "text-primary" : "text-[#02203B] "
      } text-[14px] cursor-pointer`}
    >
      {item.title} ({item.announcements_count})
    </p>
  );
};
