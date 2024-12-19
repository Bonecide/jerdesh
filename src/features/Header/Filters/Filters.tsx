"use client";

import {
  announcementsFiltersAtom,
  setAnnouncementsAtom,
} from "@/atoms/announcements";
import { headerCategories } from "@/atoms/category";
import { subwaysAtom } from "@/atoms/subways";
import { usePathname, useRouter } from "@/i18n/routing";
import { handlePreventScroll } from "@/services/utils/helpers/preventMove";
import { Button, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { motion } from "framer-motion";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useTranslations } from "next-intl";
import { Dispatch, useCallback, useState } from "react";

interface FiltersProps {
  setIsOpen: Dispatch<boolean>;
}

interface Filters {
  category: number | null;
  subway: number | null;
}
export const Filters = ({ setIsOpen }: FiltersProps) => {
  const t = useTranslations("root");
  const [announcementsFilters, setAnnouncementsFilters] = useAtom(
    announcementsFiltersAtom
  );

  const router = useRouter();
  const pathname = usePathname();
  const refetchAnnounce = useSetAtom(setAnnouncementsAtom);
  const [filters, setFilters] = useState<Filters>({
    category: null,
    subway: null,
  });
  const subways = useAtomValue(subwaysAtom);
  const categories = useAtomValue(headerCategories);

  const onConfirm = useCallback(() => {
    setAnnouncementsFilters((prev) => ({
      ...prev,
      category_id: filters.category,
      subway_id: filters.subway,
    }));
    refetchAnnounce();
    if (pathname !== "/") {
      router.push("/");
    }

    setIsOpen(false);
  }, [
    setAnnouncementsFilters,
    refetchAnnounce,
    pathname,
    setIsOpen,
    filters.category,
    filters.subway,
    router,
  ]);

  const onClear = useCallback(() => {
    setAnnouncementsFilters((prev) => ({
      category_id: null,
      sub_category_id: null,
      subway_id: null,
      search: "",
    }));
    setIsOpen(false);
    refetchAnnounce();
  }, [refetchAnnounce, setAnnouncementsFilters, setIsOpen]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.3,
      }}
      className="p-[16px] absolute bg-white rounded-[10px] z-[9] md:top-[70px] md:left-[35%] md:w-[300px] sm:left-0 max-w-full top-[128px]"
    >
      <p className="text-[11px]">{t("navigation.filters")}</p>
      <div className="mt-[10px] space-y-[7px]">
        <Select
          dropdownRender={(menu) => (
            <div
              className="max-h-[300px] overflow-auto"
              onTouchMove={handlePreventScroll}
            >
              {menu}
            </div>
          )}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, subway: value }))
          }
          defaultValue={announcementsFilters.subway_id}
          showSearch
          filterOption={(input: string, option?: DefaultOptionType) =>
            ((option?.label as string) ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          options={subways.map((item) => ({
            value: item.id,
            label: item.title,
          }))}
          placeholder={t("navigation.chooseStation")}
          className="!h-[33px] w-full !rounded-[5px] "
        />
        <Select
          dropdownRender={(menu) => (
            <div
              className="max-h-[300px] overflow-auto"
              onTouchMove={handlePreventScroll}
            >
              {menu}
            </div>
          )}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }
          showSearch
          defaultValue={announcementsFilters.category_id}
          filterOption={(input: string, option?: DefaultOptionType) =>
            ((option?.label as string) ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          options={categories.map((item) => ({
            value: item.id,
            label: item.title,
          }))}
          placeholder={t("navigation.chooseCategory")}
          className="!h-[33px] w-full !rounded-[5px] "
        />
      </div>
      <div className="flex justify-center gap-[10px] mt-[14px]">
        <Button onClick={onClear} className="w-[200px] h-[30px] text-[10px]">
          {t("navigation.clear")}
        </Button>
        <Button
          onClick={onConfirm}
          className="w-[200px] h-[30px] text-[10px]"
          type="primary"
        >
          {t("navigation.apply")}
        </Button>
      </div>
    </motion.div>
  );
};
