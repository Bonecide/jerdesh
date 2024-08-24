import { ADDS } from "@/utils/mock";
import { RecomendationCard } from "./RecomendationCard";
import Image from "next/image";
import { Banner } from "@/features/MainPage/TopBanner/TopBanner";

export const Recomendation = ({ id }: { id: number }) => {
  const rec = ADDS.filter((item) => item.id !== id).slice(0, 3);
  return (
    <div className="mt-[20px] md:mt-[30px] gap-[20px] md:flex lg:block">
      <div className="columns-1">
        <div className="w-[100%] md:w-[74vw]">
          <Banner>
            <div className="h-[75px] md:h-[81px] lg:h-[127px] exLg:h-[173px] relative rounded-md overflow-hidden">
              <Image
                src={"/images/widthBanner.png"}
                className="w-full  bg-cover"
                fill
                alt="banner"
              />
            </div>
            <div className="h-[75px] md:h-[81px] lg:h-[127px] exLg:h-[173px] relative rounded-md overflow-hidden">
              <Image
                src={"/images/topBannerMobile.png"}
                className="w-full  bg-cover"
                fill
                alt="banner"
              />
            </div>
          </Banner>
        </div>
        <h2 className="font-[500] text-[20px] mt-[20px] md:mt-[30px]">
          Рекомендации
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px] mt-[16px] md:mt-[30px]">
          {rec.map((item) => (
            <RecomendationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="columns-1 w-full h-[100vh] md:h-auto relative rounded-md mt-[24px] md:mt-0 overflow-hidden lg:hidden">
        <Image
          src={"/images/longBanner.png"}
          className="w-full h-full object-cover"
          fill
          alt="banner"
        />
      </div>
    </div>
  );
};
