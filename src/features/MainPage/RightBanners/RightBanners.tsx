"use client";
import { bannersAtom } from "@/atoms/banners/banners.atoms";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RightBanners = () => {
  const banners = useAtomValue(bannersAtom);
  if (!banners) return null;
  return (
    <div className="flex-2 hidden space-y-[15px] md:block md:w-[25%] lg:w-[15%] mt-[10px]">
      {banners.main_right.map((item) => (
        <Link key={item.id} href={item.link || ''}>
          <Image
            className="rounded-[15px] aspect-square w-full h-auto "
            src={BASE_IMAGE_URL + item.image}
            width={250}
            height={250}
            alt="banner"
          />
        </Link>
      ))}
    </div>
  );
};
