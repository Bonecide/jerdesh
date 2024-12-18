import { Categories } from "./Categories";
import { Posters } from "./Posters";
import { RightBanners } from "./RightBanners";
import { TopBanner } from "./TopBanner/TopBanner";
import MobileBanner from "./MobileBanner/MobileBanner";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { Announce } from "@/atoms/announcements";

export const MainPage = async () => {
  const getData = async () => {
    try {
      const { data } = await baseGetRequest<Announce[]>("announcement/get", {
        config: {
          isServer: true,
          noCache: true,
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  };

  const data = await getData();

  return (
    <div className="containerBlock mt-[39px]">
      <TopBanner />
      <div className="flex md:gap-[30px] items-start">
        <Categories />
        <div className="w-[100%] md:w-[75%] lg:w-[65%] mt-[10px]">
          <Posters data={data} />
          <MobileBanner />
        </div>
        <RightBanners />
      </div>
    </div>
  );
};
