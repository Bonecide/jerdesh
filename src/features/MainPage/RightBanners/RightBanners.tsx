import { RIGHT_BANNERS } from "@/utils/mock";
import Image from "next/image";
import React from "react";

export const RightBanners = () => {
  return (
    <div className="flex-2 hidden space-y-[15px] md:block md:w-[25%] lg:w-[15%] mt-[10px]">
      {RIGHT_BANNERS.map((item) => (
        <Image
          className="rounded-[15px] aspect-square w-full h-auto "
          key={item.id}
          src={item.image}
          width={250}
          height={250}
          alt="banner"
        />
      ))}
    </div>
  );
};
