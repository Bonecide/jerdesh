"use client";
import { Announce, announcementsFiltersAtom } from "@/atoms/announcements";
import { useSetAtom } from "jotai";
import { useRouter } from "nextjs-toploader/app";
import { useCallback } from "react";

export const Status = ({ item }: { item: Announce }) => {
  const setFilters = useSetAtom(announcementsFiltersAtom);
  const router = useRouter();
  const onClick = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      category_id: item.category.id,
    }));
    router.push(`/`);
  }, [item.category.id, router, setFilters]);
  return (
    <p
      className="text-center text-primary lg:text-[20px] md:text-[15px] cursor-pointer"
      onClick={onClick}
    >
      {item.category.title} {item.subcategory && `/ ${item.subcategory.title}`}
    </p>
  );
};
