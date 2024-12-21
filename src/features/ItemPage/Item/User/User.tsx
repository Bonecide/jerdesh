import { Announce, AnnounceDetails } from "@/atoms/announcements";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";

export const User = ({ item }: { item: Announce }) => {
  const t = useTranslations("root");
  const userName = useMemo(() => {
    if (!item.user_id?.name && !item.user_id?.last_name) return "";

    if (!item.user_id.name || !item.user_id.last_name) {
      return item.user_id.name || item.user_id.last_name;
    }
    return item.user_id?.last_name + " " + item.user_id?.name;
  }, [item.user_id]);
  return (
    <div className="flex gap-[5px]">
      <Image
        src={
          item.user_id.logo
            ? BASE_IMAGE_URL + item.user_id.logo
            : "/images/emptyUser.jpg"
        }
        width={87}
        height={87}
        alt="user"
        className="lg:size-[70px] md:size-[50px] lg:rounded-[15px] md:rounded-[10px]"
      />
      <div className="flex flex-col justify-between">
        <p className="lg:text-[17px] md:text-[15px] text-[#000000DE] ">
          {userName}
        </p>
        <p className="lg:text-[17px] md:text-[15px]">
          {t("item.date")} {new Date(item.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
