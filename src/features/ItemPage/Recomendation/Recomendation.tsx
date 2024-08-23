import { ADDS } from "@/utils/mock";
import { RecomendationCard } from "./RecomendationCard";
import Image from "next/image";

export const Recomendation = ({ id }: { id: number }) => {
  const rec = ADDS.filter((item) => item.id !== id).slice(0, 3);
  return (
    <div className="mt-[30px] gap-[20px] md:flex lg:block">
      <div>
        <Image
          src={"/images/someBanner.png"}
          className="w-full h-auto object-cover lg:mt-[20px]"
          width={996}
          height={127}
          alt="banner"
        />
        <h2 className="font-[500] text-[20px] mt-[30px]">Рекомендации</h2>
        <div className="grid grid-cols-3 gap-[27px] mt-[30px]">
          {rec.map((item) => (
            <RecomendationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Image
        src={"/images/longBanner.png"}
        className="w-[300px] h-auto object-contain block lg:hidden "
        width={300}
        height={900}
        alt="banner"
      />
    </div>
  );
};
