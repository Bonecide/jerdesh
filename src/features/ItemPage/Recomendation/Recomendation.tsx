"use client";

import { RecomendationCard } from "./RecomendationCard";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAtomValue } from "jotai";
import { recomendationAtom } from "@/atoms/announcements";
import { bannersAtom } from "@/atoms/banners/banners.atoms";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { getRandomInt } from "@/utils/helpers";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";

export const Recomendation = () => {
  const banners = useAtomValue(bannersAtom);
  const rec = useAtomValue(recomendationAtom);

  const t = useTranslations("root");
  rec.slice(0, 3);
  return (
    <div className="mt-[30px] gap-[20px] md:flex lg:block">
      <div>
        {banners && banners.detail_bottom.length ? (
          <Link
            target="_blank"
            href={
              banners.detail_bottom[
                getRandomInt(0, banners.detail_bottom.length - 1)
              ]?.link || ""
            }
          >
            <Image
              src={
                BASE_IMAGE_URL! +
                banners.detail_bottom[
                  getRandomInt(0, banners.detail_bottom.length - 1)
                ]?.image
              }
              className="w-full hidden md:block h-[74px] md:h-auto object-cover lg:mt-[20px]"
              width={996}
              height={127}
              alt="banner"
            />
          </Link>
        ) : null}
        <h2 className="font-[500] text-[20px] mt-[30px]">
          {t("item.recomendations")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px] mt-[30px]">
          {rec.map((item) => (
            <RecomendationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      {banners && banners.detail_right.length ? (
        <Link
          target="_blank"
          href={
            banners.detail_right[
              getRandomInt(0, banners.detail_right.length - 1)
            ]?.link || ""
          }
        >
          <Image
            src={
              BASE_IMAGE_URL +
              banners.detail_right[
                getRandomInt(0, banners.detail_right.length - 1)
              ]?.mobile_image
            }
            className="w-full md:w-[300px] max-[767px]:mt-6 max-[767px]:mx-auto  h-auto object-contain block lg:hidden"
            width={300}
            height={900}
            alt="banner"
          />
        </Link>
      ) : null}
    </div>
  );
};
