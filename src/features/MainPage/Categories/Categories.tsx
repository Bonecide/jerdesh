"use client";

import { CategoryAtom } from "@/atoms/category";
import useCategory from "@/hooks/useCategory";
import { getAllCategories } from "@/services/category";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";

export const Categories = () => {
  const { categories } = useCategory();

  return (
    <div className=" flex-col mt-[10px] gap-[5px] w-[20%] hidden lg:flex ">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex  items-center gap-[10px] cursor-pointer w-[210px]"
        >
          <div className="size-[10px] min-w-[10px] bg-primary rounded-full" />
          <p className="text-[#02203B] text-[14px]">
            {item.title} ({item.count})
          </p>
        </div>
      ))}
    </div>
  );
};
