"use client";
import { bannersAtom } from "@/atoms/banners/banners.atoms";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { RIGHT_BANNERS } from "@/utils/mock";
import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";

export const RightBanners = () => {
  const banners = useAtomValue(bannersAtom);
  if (!banners) return null;
  return (
    <div className="flex-2 hidden space-y-[15px] md:block md:w-[25%] lg:w-[15%] mt-[10px]">
      {banners.main_right.map((item) => (
        <Image
          className="rounded-[15px] aspect-square w-full h-auto "
          key={item.id}
          src={BASE_IMAGE_URL + item.image}
          width={250}
          height={250}
          alt="banner"
        />
      ))}
    </div>
  );
};
