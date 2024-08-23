import { ADD } from "@/utils/mock";
import Image from "next/image";

export const User = ({ item }: { item: ADD }) => {
  return (
    <div className="flex gap-[5px]">
      <Image
        src={item.user.image}
        width={87}
        height={87}
        alt="user"
        className="lg:size-[70px] md:size-[50px] lg:rounded-[15px] md:rounded-[10px]"
      />
      <div className="flex flex-col justify-between">
        <p className="lg:text-[17px] md:text-[15px] text-[#000000DE] ">{item.user.name}</p>
        <p className="lg:text-[17px] md:text-[15px]">
          Дата публикации: {new Date(item.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
