import { ADD } from "@/utils/mock";
import { ImageSlider } from "./ImageSlider";
import { User } from "./User";
import { Status } from "./Status";
import { Contacts } from "./Contacts";
import Image from "next/image";
import { Recomendation } from "../Recomendation";

export const Item = ({ item }: { item: ADD }) => {
  return (
    <div className="flex gap-[30px] items-start">
      <div>
        <h1 className="text-[25px] font-[500]">{item.title}</h1>
        <div className="flex gap-[30px] items-start">
          <ImageSlider images={item.images} />
          <div className="space-y-[20px]">
            <User item={item} />
            <Status item={item} />
            <Contacts item={item} />
          </div>
        </div>
        <div className="w-full py-[30px] px-[18px] rounded-[20px] mt-[20px] descriptionShadow">
          <p className="font-[500] text-[16px]">Описание</p>
          <p className="text-[16px] mt-[10px] font-[300]">{item.description}</p>
        </div>
        <Recomendation id={item.id} />
        <Image
          src={"/images/widthBanner.png"}
          className="w-full h-auto object-contain mt-[20px]"
          width={1016}
          height={222}
          alt="banner"
        />
      </div>
      <Image
        src={"/images/longBanner.png"}
        className="w-[300px] h-auto object-contain"
        width={300}
        height={900}
        alt="banner"
      />
    </div>
  );
};
