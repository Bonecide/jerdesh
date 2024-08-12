"use client";
import { useAtomValue } from "jotai";
import { Tab, TabSlug } from "../Profile";
import { userAtom } from "@/atoms/user";
import { Dispatch, useState } from "react";
import Image from "next/image";
import { ExitModal } from "./ExitModal";

interface ProfileTabs {
  currentTab: TabSlug;
  setCurrentTab: Dispatch<TabSlug>;
}

export const ProfileTabs = ({ currentTab, setCurrentTab }: ProfileTabs) => {
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

  return (
    <div className="bg-white p-[25px] flex flex-col gap-[27px] shadowTabs rounded-[15px]">
      <div className="flex gap-[10px]">
        {user.image && (
          <Image
            width={30}
            height={30}
            src={user.image}
            alt={user.name}
            className="rounded-full w-[50px] h-[50px] object-cover"
          />
        )}
        <div className="flex flex-col justify-between">
          <h4 className="font-[500] text-[20px]">{user.name}</h4>
          <p>Баланс: {user.balance?.toLocaleString("ru-RU") || "0"} Р</p>
        </div>
      </div>
      <div className="space-y-[15px]">
        {TABS.map((item) => (
          <p
            onClick={() => setCurrentTab(item.slug)}
            key={item.slug}
            className={`cursor-pointer pl-[10px] text-[16px] transition-all duration-300 hover:text-primary ${
              currentTab === item.slug ? "text-primary" : ""
            }`}
          >
            {item.title}
          </p>
        ))}
        <p
          onClick={() => setIsExit(true)}
          className="cursor-pointer text-rose-500 pl-[10px]"
        >
          Выход
        </p>
      </div>
      <ExitModal isOpen={isExit} setIsOpen={setIsExit} />
    </div>
  );
};
