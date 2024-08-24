import Image from "next/image";
import { Categories } from "./Categories";
import { Posters } from "./Posters";
import { RightBanners } from "./RightBanners";
import { Banner } from "./TopBanner/TopBanner";

export const BANNERS = [
  "/images/banner-full.png",
  "/images/banner-full.png",
  "/images/banner-full.png",
];

export const MainPage = () => {
  return (
    <div className="containerBlock mt-[39px]">
      <Banner>
        {BANNERS.map((url) => {
          return (
            <Image
              key={url}
              src={url}
              className="w-full !hidden md:!block"
              alt="banner"
              width={1800}
              height={136}
            />
          );
        })}
      </Banner>
      <div className="flex gap-[30px] items-start">
        <Categories />
        <Posters />
        <RightBanners />
      </div>
    </div>
  );
};
