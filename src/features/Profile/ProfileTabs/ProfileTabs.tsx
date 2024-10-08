"use client";
import { useAtom, useAtomValue } from "jotai";
import { Tab, TabSlug } from "../Profile";
import { userAtom } from "@/atoms/user";
import { Dispatch, useCallback, useState } from "react";
import Image from "next/image";
import { ExitModal } from "./ExitModal";
import { useRouter } from "next/navigation";
import { tabAtom } from "@/atoms/profile";
import { IoMdClose } from "react-icons/io";

interface ProfileTabsProps {
  setIsOpen?: Dispatch<boolean>;
}

export const ProfileTabs = ({ setIsOpen }: ProfileTabsProps) => {
  const [currentTab, setCurrentTab] = useAtom(tabAtom);
  const router = useRouter();

  const [isExit, setIsExit] = useState(false);
  const user = useAtomValue(userAtom);

  const TABS: Tab[] = [
    {
      title: "Мой профиль",
      slug: "profile",
    },
    {
      title: "Мои объявления",
      slug: "adds",
    },
    {
      title: "VIP услуги",
      slug: "vips",
    },
    {
      title: "Анонсы",
      slug: "announcement",
    },
    {
      title: "Пополнить счёт",
      slug: "addMoney",
    },
    {
      title: "Настройки",
      slug: "settings",
    },
  ];

  const onClickTab = useCallback(
    (tab: TabSlug) => () => {
      setIsOpen && setIsOpen(false);
      setCurrentTab(tab);
      router.push(`/profile?tab=${tab}`);
    },
    [router, setCurrentTab, setIsOpen]
  );

  const handleExitClick = useCallback(() => {
    setIsExit(true);
  }, []);

  return (
    <div className="bg-white lg:p-[25px] p-[20px] md:p-[12px] flex flex-col lg:gap-[27px] md:gap-[10px] relative shadowTabs lg:rounded-[15px] md:rounded-[8px] md:w-[203px] h-screen md:h-auto w-screen lg:w-auto">
      <div className="flex gap-[10px]">
        {user.image && (
          <Image
            width={30}
            height={30}
            src={user.image}
            alt={user.name}
            className="rounded-full lg:size-[50px] md:size-[30px] size-[50px] object-cover"
          />
        )}
        <div className="flex flex-col justify-between">
          <h4 className="font-[500] lg:text-[20px] md:text-[11px]">
            {user.name}
          </h4>
          <p className="md:text-[8px] lg:text-[14px]">
            Баланс: {user.balance?.toLocaleString("ru-RU") || "0"} Р
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
            {item.title}
          </p>
        ))}
        <p
          onClick={handleExitClick}
          className="cursor-pointe lg:text-[16px] cursor-pointer md:text-[10px] text-rose-500 pl-[10px]"
        >
          Выход
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
