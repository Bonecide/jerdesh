"use client";
import { useAtom, useAtomValue } from "jotai";
import { Tab, TabSlug } from "../Profile";
import { Dispatch, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { ExitModal } from "./ExitModal";
import { profileAtom, tabAtom } from "@/atoms/profile";
import { IoMdClose } from "react-icons/io";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useRouter } from "nextjs-toploader/app";
import { useLocale, useTranslations } from "next-intl";

interface ProfileTabsProps {
  setIsOpen?: Dispatch<boolean>;
}

export const ProfileTabs = ({ setIsOpen }: ProfileTabsProps) => {
  const [currentTab, setCurrentTab] = useAtom(tabAtom);
  const router = useRouter();
  const locale = useLocale();
  const [isExit, setIsExit] = useState(false);
  const user = useAtomValue(profileAtom);

  const t = useTranslations("root");
  const TABS: Tab[] = [
    {
      slug: "profile",
    },
    {
      slug: "adds",
    },
    {
      slug: "vips",
    },
    // {
    //   slug: "announcement",
    // },
    {
      slug: "addMoney",
    },
    {
      slug: "settings",
    },
  ];

  const onClickTab = useCallback(
    (tab: TabSlug) => () => {
      setIsOpen && setIsOpen(false);
      setCurrentTab(tab);
      router.push(`/${locale}/profile?tab=${tab}`);
    },
    [router, setCurrentTab, setIsOpen, locale]
  );

  const handleExitClick = useCallback(() => {
    setIsExit(true);
  }, []);

  const userName = useMemo(() => {
    if (!user?.name && !user?.last_name) return user?.email;

    if (!user.name || !user.last_name) {
      return user.name || user.last_name;
    }
    return user?.name + " " + user?.last_name;
  }, [user]);
  return (
    <div className="bg-white lg:p-[25px] p-[20px] md:p-[12px] flex flex-col lg:gap-[27px] md:gap-[10px] relative shadowTabs lg:rounded-[15px] md:rounded-[8px] md:w-[203px] h-screen md:h-auto w-screen lg:w-auto">
      <div className="flex gap-[10px]">
        <Image
          width={30}
          height={30}
          src={
            user?.logo ? BASE_IMAGE_URL + user.logo : "/images/emptyUser.jpg"
          }
          alt={user?.name || "user"}
          className="rounded-full lg:size-[50px] md:size-[30px] size-[50px] object-cover"
        />

        <div className="flex flex-col justify-between">
          <h4 className="font-[500] lg:text-[20px] md:text-[11px] truncate max-w-[200px]">
            {userName}
          </h4>
          <p className="md:text-[8px] lg:text-[14px]">
            {t("profile.balance", {
              amount: user?.balance?.toLocaleString("ru-RU") || "0",
            })}
          </p>
        </div>
      </div>
      <div className="space-y-[15px] mt-[20px] md:mt-0">
        {TABS.map((item) => (
          <p
            onClick={onClickTab(item.slug)}
            key={item.slug}
            className={`cursor-pointer pl-[10px] lg:text-[16px] md:text-[10px] transition-all duration-300 hover:text-primary ${
              currentTab === item.slug ? "text-primary" : ""
            }`}
          >
            {t(`profile.${item.slug}`)}
          </p>
        ))}
        <p
          onClick={handleExitClick}
          className="cursor-pointe lg:text-[16px] cursor-pointer md:text-[10px] text-rose-500 pl-[10px]"
        >
          {t("profile.exit")}
        </p>
      </div>
      <div
        className="absolute top-[20px] right-[20px] cursor-pointer md:hidden"
        onClick={() => {
          setIsOpen && setIsOpen(false);
        }}
      >
        <IoMdClose className="size-[25px]" />
      </div>
      <ExitModal
        setIsTabOpen={setIsOpen}
        isOpen={isExit}
        setIsOpen={setIsExit}
      />
    </div>
  );
};
