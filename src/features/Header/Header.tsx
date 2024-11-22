"use client";
import { PlusOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { GlobeAltIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { AuthModal } from "@/features/AuthModal";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { isAuthAtom } from "@/atoms/authAtoms";
import { AnimatePresence } from "framer-motion";
import { Filters } from "./Filters";
import { Burger } from "./Burger";
import { userAtom } from "@/atoms/user";
import { Tabs } from "./Tabs";
import { DefaultOptionType } from "antd/es/select";
import { subwaysAtom } from "@/atoms/subways";
import { headerCategories } from "@/atoms/category";
import {
  announcementsFiltersAtom,
  setAnnouncementsAtom,
} from "@/atoms/announcements";
import { useRouter } from "nextjs-toploader/app";
export const Header = () => {
  const subways = useAtomValue(subwaysAtom);
  const categories = useAtomValue(headerCategories);

  const router = useRouter();
  const user = useAtomValue(userAtom);
  const isAuth = useAtomValue(isAuthAtom);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const [isFilters, setIsFilters] = useState(false);
  const [isTabs, setIsTabs] = useState(false);

  const [announcementsFilters, setAnnouncementsFilters] = useAtom(
    announcementsFiltersAtom
  );

  const refetchAnnounce = useSetAtom(setAnnouncementsAtom);

  const handleProfileClick = useCallback(() => {
    if (isAuth) {
      router.push("/profile?tab=profile");
    } else {
      setIsAuthModal(true);
    }
  }, [isAuth, router]);

  const handleTabsClick = useCallback(() => {
    if (isAuth) {
      setIsTabs((prev) => !prev);
    } else {
      setIsAuthModal(true);
    }
  }, [isAuth]);

  const onChangeSubway = useCallback(
    (value: number) => {
      setAnnouncementsFilters((prev) => ({ ...prev, subway_id: value }));
      refetchAnnounce();
    },
    [setAnnouncementsFilters, refetchAnnounce]
  );

  const onChangeCategory = useCallback(
    (value: number) => {
      setAnnouncementsFilters((prev) => ({ ...prev, category_id: value }));
      refetchAnnounce();
    },
    [setAnnouncementsFilters, refetchAnnounce]
  );

  return (
    <header className="containerBlock py-[20px] flex flex-col md:flex-row gap-[10px] md:justify-between items-center header ">
      <div className="flex justify-between gap-[10px] w-full ">
        <Burger />
        <Link href={"/"} className="cursor-pointer">
          <Image
            src="/logo.svg"
            className="lg:h-[50px] h-[40px] "
            width={212}
            height={50}
            alt="Jerdesh"
          />
        </Link>
        <div className="relative hidden md:block">
          <input
            className="lg:w-[300px] md:w-[303px]  bg-white outline-none pl-[50px] md:h-[45px] lg:h-[56px] shadow lg:!rounded-[12px] md:!rounded-[8px] border-none"
            placeholder="Объявление"
          />
          <SearchOutlined className="absolute !text-primary lg:top-[28%] md:top-[25%]  text-[25px] left-[10px]" />
          <div
            className="flex lg:hidden items-center gap-[6px] absolute right-[20px] top-[34%] cursor-pointer"
            onClick={() => setIsFilters((prev) => !prev)}
          >
            <p className="text-primary text-[10px]">Фильтры</p>
            <Image src="/filters.svg" width={15} height={15} alt="filters" />
          </div>
        </div>
        <Select
          allowClear
          notFoundContent={"Пусто"}
          onChange={onChangeSubway}
          defaultValue={announcementsFilters.subway_id}
          showSearch
          filterOption={(input: string, option?: DefaultOptionType) =>
            ((option?.label as string) ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          className="!h-[57px] w-[18%] !hidden lg:!block  "
          placeholder="Выбрать метро"
          options={subways.map((item) => ({
            value: item.id,
            label: item.title,
          }))}
        />
        <Select
          allowClear
          notFoundContent={"Пусто"}
          onChange={onChangeCategory}
          defaultValue={announcementsFilters.category_id}
          showSearch
          filterOption={(input: string, option?: DefaultOptionType) =>
            ((option?.label as string) ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          className="!h-[57px] w-[18%] !hidden lg:!block  "
          placeholder="Выбрать категорию"
          options={categories.map((item) => ({
            value: item.id,
            label: item.title,
          }))}
        />
        <Button
          onClick={() => router.push("/create")}
          type="primary"
          className="lg:!h-[57px] md:!h-[45px] w-[15%] lg:!text-[16px] !text-white md:!flex items-center justify-center lg:!rounded-[12px] md:!rounded-[5px] border-none !bg-accent hover:!bg-accent hover:!text-white !shadow-none !hidden"
        >
          <PlusOutlined />
          Опубликовать
        </Button>
        <div className="lg:h-[57px] lg:w-[57px] md:h-[45px] cursor-pointer md:w-[45px] border border-primary  bg-white lg:rounded-[12px] md:rounded-[8px] hidden lg:flex items-center justify-center">
          <UserCircleIcon
            onClick={handleProfileClick}
            className="text-primary size-[30px] "
          />
        </div>
        <div className="lg:hidden block">
          {!user.image || !isAuth ? (
            <div className="lg:h-[57px] lg:w-[57px] h-[45px] cursor-pointer w-[45px] border border-primary  bg-white lg:rounded-[12px] rounded-[8px] flex items-center justify-center">
              <UserCircleIcon
                onClick={handleProfileClick}
                className="text-primary size-[30px] "
              />
            </div>
          ) : (
            <div className="relative">
              <Image
                src={user.image}
                alt="user"
                width={50}
                height={50}
                className="rounded-full"
                onClick={handleTabsClick}
              />
              <Image
                src={"/triangle.svg"}
                width={8}
                height={4}
                className={`absolute right-0 bottom-0 ${
                  isTabs && "rotate-180"
                } transition-all duration-300`}
                alt="triangle"
              />
            </div>
          )}
        </div>
      </div>
      <AuthModal isAuth={isAuthModal} setIsAuth={setIsAuthModal} />
      <AnimatePresence>
        {isFilters && <Filters setIsOpen={setIsFilters} />}
      </AnimatePresence>
      <AnimatePresence>
        {isTabs && <Tabs setIsOpen={setIsTabs} />}
      </AnimatePresence>
      <div className="flex justify-between gap-[10px] w-full  md:hidden">
        <div className="relative  w-[80%]">
          <input
            className="w-full  bg-white outline-none pl-[30px] h-[40px] text-[12px] shadow lg:!rounded-[12px] md:!rounded-[8px] border-none"
            placeholder="Объявление"
          />
          <SearchOutlined className="absolute !text-primary  text-[18px] top-[30%] left-[10px]" />
          <div
            className="flex lg:hidden items-center gap-[6px] absolute right-[20px] top-[34%] cursor-pointer"
            onClick={() => setIsFilters((prev) => !prev)}
          >
            <p className="text-primary text-[10px]">Фильтры</p>
            <Image src="/filters.svg" width={15} height={15} alt="filters" />
          </div>
        </div>
        <Button
          onClick={() => router.push("/create")}
          type="primary"
          className="!h-[40px] w-[62px] lg:!text-[16px] !text-white !flex md:!hidden items-center justify-center lg:!rounded-[12px] md:!rounded-[5px] border-none !bg-accent hover:!bg-accent hover:!text-white !shadow-none "
        >
          <PlusOutlined />
        </Button>
      </div>
    </header>
  );
};
