"use client";

import { headerCategories } from "@/atoms/category";
import { subwaysAtom } from "@/atoms/subways";
import { Button, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { Dispatch } from "react";

interface FiltersProps {
  setIsOpen: Dispatch<boolean>;
}
export const Filters = ({ setIsOpen }: FiltersProps) => {
  const subways = useAtomValue(subwaysAtom);
  const categories = useAtomValue(headerCategories);
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
      <p className="text-[11px]">Фильтры</p>
      <div className="mt-[10px] space-y-[7px]">
        <Select
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
          placeholder="Выбрать метро"
          className="!h-[33px] w-full !rounded-[5px] "
        />
        <Select
          showSearch
          filterOption={(input: string, option?: DefaultOptionType) =>
            ((option?.label as string) ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          options={categories.map((item) => ({
            value: item.id,
            label: item.title,
          }))}
          placeholder="Выбрать категорию"
          className="!h-[33px] w-full !rounded-[5px] "
        />
      </div>
      <div className="flex justify-center gap-[10px] mt-[14px]">
        <Button
          onClick={() => setIsOpen(false)}
          className="w-[200px] h-[30px] text-[10px]"
        >
          Очистить все
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          className="w-[200px] h-[30px] text-[10px]"
          type="primary"
        >
          Применить
        </Button>
      </div>
    </motion.div>
  );
};
