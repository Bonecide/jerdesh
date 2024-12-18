"use client";

import {
  announcementsFiltersAtom,
  setAnnouncementsAtom,
} from "@/atoms/announcements";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "nextjs-toploader/app";
import { useCallback } from "react";

export const CategoryItem = ({
  item,
  onClose,
}: {
  item: CategoryProps;
  onClose: () => void;
}) => {
  const [filters, setFilters] = useAtom(announcementsFiltersAtom);
  const refetch = useSetAtom(setAnnouncementsAtom);
  const router = useRouter();

  const onClickCategory = useCallback(
    (id: number) => () => {
      setFilters((prev) => ({ ...prev, category_id: id }));
      refetch();
      onClose();
      router.push("/");
    },
    [setFilters, refetch, router,onClose]
  );
  return (
    <div
      onClick={onClickCategory(item.id)}
      className="flex  items-center gap-[10px] cursor-pointer w-[210px]"
    >
      <div className="size-[10px] min-w-[10px] bg-primary rounded-full" />
      <p
        className={`${
          filters.category_id === item.id ? "text-primary" : "text-[#02203B] "
        } text-[14px]`}
      >
        {item.title} ({item.announcements_count})
      </p>
    </div>
  );
};
