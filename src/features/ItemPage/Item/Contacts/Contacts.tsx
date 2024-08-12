import { ADD } from "@/utils/mock";
import { PhoneOutlined } from "@ant-design/icons";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const Contacts = ({ item }: { item: ADD }) => {
  return (
    <div className="flex w-full rounded-[30px] py-[10px] flex-wrap gap-y-[20px] px-[20px] contactShadow justify-between">
      <div className="flex gap-[10px] items-center">
        <PhoneIcon className="text-primary size-[28px]" />
        <p className="text-[#696969]">{item.user.phone}</p>
      </div>
      <div className="flex gap-[10px] items-center">
        <MapPinIcon className="text-primary size-[28px]" />
        <p className="text-[#696969]">{item.address}</p>
      </div>
      <div className="flex gap-[10px] items-center">
        <Image
          src={"/images/trainIcon.svg"}
          width={28}
          height={28}
          alt="train"
        />
        <p className="text-[#696969]">{item.station}</p>
      </div>
    </div>
  );
};
