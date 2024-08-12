import { Categories } from "./Categories";
import { Posters } from "./Posters";
import { RightBanners } from "./RightBanners";
import { TopBanner } from "./TopBanner/TopBanner";

export const MainPage = () => {
  return (
    <div className="container mt-[39px]">
      <TopBanner />
      <div className="flex gap-[30px] items-start">
        <Categories />
        <Posters />
        <RightBanners />
      </div>
    </div>
  );
};
