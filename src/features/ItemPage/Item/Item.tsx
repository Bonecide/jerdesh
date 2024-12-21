"use client";

import { ImageSlider } from "./ImageSlider";
import { User } from "./User";
import { Status } from "./Status";
import { Contacts } from "./Contacts";
import Image from "next/image";
import { Recomendation } from "../Recomendation";
import {
  activeAnnounceAtom,
  Announce,
  AnnounceDetails,
  AnnounceWithImages,
} from "@/atoms/announcements";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { bannersAtom } from "@/atoms/banners/banners.atoms";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { getRandomInt } from "@/utils/helpers";

export const Item = ({ item }: { item: Announce }) => {
  const setActiveAnnounce = useSetAtom(activeAnnounceAtom);
  const banners = useAtomValue(bannersAtom);
  useEffect(() => {
    setActiveAnnounce(item.id);
  }, [item.id, setActiveAnnounce]);
  return (
    <div className="flex flex-col md:flex-row gap-[30px] items-start">
      <div className="w-full">
        <h1 className="lg:text-[25px] md:text-[16px] font-[500]">
          {item.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-[30px] items-start">
          <ImageSlider images={item.images} />
          <div className="space-y-[20px] w-full">
            <User item={item} />
            <Status item={item} />
            <Contacts item={item} />
          </div>
        </div>
        <div className="w-full py-[30px] px-[18px] rounded-[20px] mt-[20px] descriptionShadow">
          <p className="font-[500] text-[16px]">Описание</p>
          <p className="text-[16px] mt-[10px] font-[300]">{item.description}</p>
        </div>

        <Recomendation />
      </div>

      {banners && banners.detail_right.length ? (
        <Image
          src={
            BASE_IMAGE_URL! +
            banners.detail_right[getRandomInt(0, banners.detail_right.length)]
              .image
          }
          className="w-[300px] h-auto object-contain hidden lg:block"
          width={300}
          height={900}
          alt="banner"
        />
      ) : null}
      {/* <Image
        src={"/images/longBanner.png"}
        className="w-[300px] h-auto object-contain hidden lg:block"
        width={300}
        height={900}
        alt="banner"
      /> */}
    </div>
  );
};
