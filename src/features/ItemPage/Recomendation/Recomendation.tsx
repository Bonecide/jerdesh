"use client";

import { ADDS } from "@/utils/mock";
import { RecomendationCard } from "./RecomendationCard";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export const Recomendation = ({ id }: { id: number }) => {
  const rec = ADDS.filter((item) => item.id !== id).slice(0, 3);

  const isMobile = useMediaQuery("(max-width:767px)");

  const imageUrl = isMobile ? "topBannerMobile" : "someBanner";

  return (
    <div className="mt-[30px] gap-[20px] md:flex lg:block">
      <div>
        <Image
          src={`/images/${imageUrl}.png`}
          className="w-full h-[74px] md:h-auto object-cover lg:mt-[20px]"
          width={996}
          height={127}
          alt="banner"
        />
        <h2 className="font-[500] text-[20px] mt-[30px]">Рекомендации</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px] mt-[30px]">
          {rec.map((item) => (
            <RecomendationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Image
        src={"/images/mobileBottomBanner.png"}
        className="w-full md:w-[300px] max-[767px]:mt-6 max-[767px]:mx-auto  h-auto object-contain block lg:hidden"
        width={300}
        height={900}
        alt="banner"
      />
    </div>
  );
};
