import { Categories } from "./Categories";
import { Posters } from "./Posters";
import { RightBanners } from "./RightBanners";
import { TopBanner } from "./TopBanner/TopBanner";
import MobileBanner from "./MobileBanner/MobileBanner";

export const MainPage = () => {
  return (
    <div className="containerBlock mt-[39px]">
      <TopBanner />
      <div className="flex md:gap-[30px] items-start">
        <Categories />
        <div className="w-[100%] md:w-[75%] lg:w-[65%] mt-[10px]">
          <Posters />
          <MobileBanner />
        </div>
        <RightBanners />
      </div>
    </div>
  );
};
