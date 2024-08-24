"use client";
import { ADD } from "@/utils/mock";
import { MapPinIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const RecomendationCard = ({ item }: { item: ADD }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/items/${item.id}`)}
      className="w-full flex flex-col gap-[16px] py-[20px] px-[38px] lg:p-[37px] md:p-[15px] bg-white shadowRec rounded-[25px] cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s]"
    >
      <div className="flex max-[767px]:justify-between gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <Squares2X2Icon className="size-[20px] text-[#BFBFBF]" />
          <p className="text-[12px]">Категория</p>
        </div>
        <div className="flex items-center gap-[5px]">
          <MapPinIcon className="size-[20px] text-[#BFBFBF]" />
          <p className="text-[12px]">Место</p>
        </div>
      </div>
      <h4 className="text-[16px] font-[500]">{item.title}</h4>
      <Image
        src={item.images[0]}
        alt={item.title}
        width={239}
        height={169}
        className="w-full h-auto rounded-[15px]"
      />
    </div>
  );
};
