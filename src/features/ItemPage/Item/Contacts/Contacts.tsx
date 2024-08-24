import { ADD } from "@/utils/mock";
import { PhoneOutlined } from "@ant-design/icons";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const Contacts = ({ item }: { item: ADD }) => {
  return (
    <div className="flex w-full rounded-[30px] py-[12px] px-[18px] gap-[10px] flex-wrap gap-y-[20px] lg:px-[20px] md:px-[10px] contactShadow justify-between">
      <div className="flex gap-[10px] items-center">
        <PhoneIcon className="text-primary size-[24px] lg:size-[28px] md:size-[17px]" />
        <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
          {item.user.phone}
        </p>
      </div>
      <div className="flex gap-[10px] items-center">
        <MapPinIcon className="text-primary size-[24px] lg:size-[28px] md:size-[17px]" />
        <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
          {item.address}
        </p>
      </div>
      <div className="flex gap-[10px] items-center">
        <Image
          src={"/images/trainIcon.svg"}
          width={28}
          height={28}
          alt="train"
          className="md:size-[17px] lg:size-[28px]"
        />
        <p className="text-[#696969] md:text-[12px] lg:text-[14px]">
          {item.station}
        </p>
      </div>
    </div>
  );
};
