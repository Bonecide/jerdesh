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
        className="w-[70px] h-[70px] rounded-[15px]"
      />
      <div className="flex flex-col justify-between">
        <p className="text-[17px] text-[#000000DE] ">{item.user.name}</p>
        <p className="text-[17px]">
          Дата публикации: {new Date(item.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
