"use client";
import { Announce } from "@/atoms/announcements";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { MapPinIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import React from "react";

export const RecomendationCard = ({ item }: { item: Announce }) => {
  const router = useRouter();
  const locale = useLocale();
  return (
    <div
      onClick={() => router.push(`/${locale}/items/${item.id}`)}
      className="w-full flex flex-col gap-[16px] py-[20px] px-[38px] lg:p-[37px] md:p-[15px] bg-white shadowRec rounded-[25px] cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s]"
    >
      <div className="flex max-[767px]:justify-between gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <Squares2X2Icon className="size-[20px] text-[#BFBFBF]" />
          <p className="text-[12px]">{item.category.title}</p>
        </div>
        <div className="flex items-center gap-[5px]">
          <MapPinIcon className="size-[20px] text-[#BFBFBF]" />
          <p className="text-[12px]">{item.address}</p>
        </div>
      </div>
      <h4 className="text-[16px] font-[500]">{item.title}</h4>
      <div className="w-full bg-gray-200 h-[200px] rounded-[15px]">
        <Image
          src={BASE_IMAGE_URL + item.images[0].path}
          alt={item.title}
          width={239}
          height={169}
          className="w-full h-full object-contain rounded-[15px]"
        />
      </div>
    </div>
  );
};
