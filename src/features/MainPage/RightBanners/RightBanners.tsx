import { RIGHT_BANNERS } from "@/utils/mock";
import Image from "next/image";
import React from "react";

export const RightBanners = () => {
  return (
    <div className="flex-2 space-y-[15px] w-[20%] mt-[30px]">
      {RIGHT_BANNERS.map((item) => (
        <Image
          className="rounded-[15px] aspect-square "
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
