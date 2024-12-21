"use client";
import { Announce } from "@/atoms/announcements";
import { ShareSocial } from "@/components/SharesSocial";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Contacts = ({ item }: { item: Announce }) => {
  const t = useTranslations("root");
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="flex w-full rounded-[30px] py-[10px] gap-[10px] flex-wrap gap-y-[20px] lg:px-[20px] md:px-[10px] contactShadow justify-between">
        <div className="flex gap-[10px] items-center">
          <PhoneIcon className="text-primary size-6 lg:size-[28px] md:size-[17px]" />
          <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
            {item.phone}
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <MapPinIcon className="text-primary size-6 lg:size-[28px] md:size-[17px]" />
          <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
            {item.address}
          </p>
        </div>
        {/* {item.subway && (
          <div className="flex gap-[10px] items-center">
            <Image
              src={"/images/trainIcon.svg"}
              width={28}
              height={28}
              alt="train"
              className="md:size-[17px] size-6 lg:size-[28px]"
            />

            <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
              {item.subway.title}
            </p>
          </div>
        )} */}

        {item.city && (
          <div className="flex gap-[10px] items-center">
            <Image
              src={"/images/trainIcon.svg"}
              width={28}
              height={28}
              alt="train"
              className="md:size-[17px] size-6 lg:size-[28px]"
            />

            <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
              {item.city.title}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center w-full justify-between">
        <div className="flex items-center">
          {t("item.repost")}{" "}
          <ShareSocial
            link={window?.location.href}
            title={item.title}
            image={BASE_IMAGE_URL! + item.images[0]}
          />
        </div>
        <p>
          {t("item.viewCount")} {item.views}
        </p>
      </div>
    </div>
  );
};
