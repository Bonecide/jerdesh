"use client";
import { PlusOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { GlobeAltIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AuthModal } from "@/features/AuthModal";
import { useAtomValue } from "jotai";
import { isAuthAtom } from "@/atoms/authAtoms";
import { useRouter } from "next/navigation";

const METRO = [
  {
    value: 1,
    label: "Люблино",
  },
];
export const Header = () => {
  const router = useRouter();

  const isAuth = useAtomValue(isAuthAtom);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleProfileClick = useCallback(() => {
    if (isAuth) {
      router.push("/profile");
    } else {
      setIsAuthModal(true);
    }
  }, [isAuth, router]);

  return (
    <header className="container py-[20px] flex justify-between items-center header">
      <Link href={"/"}>
        <Image src="/logo.svg" width={212} height={50} alt="Jerdesh" />
      </Link>
      <div className="relative">
        <input
          className="w-[300px]  bg-white outline-none pl-[50px] h-[57px] shadow rounded-[12px] border-none"
          placeholder="Объявление"
        />
        <SearchOutlined className="absolute text-primary top-[28%]  text-[25px] left-[10px]" />
      </div>
      <Select
        className="!h-[57px] w-[200px] rounded-[12px] "
        placeholder="Выбрать метро"
        options={METRO}
      />
      <Select
        className="!h-[57px] w-[200px] rounded-[12px] "
        placeholder="Выбрать метро"
        options={METRO}
      />
      <Button
        onClick={() => router.push("/create")}
        type="primary"
        icon={<PlusOutlined />}
        className="!h-[57px] text-white rounded-[12px] border-none bg-accent hover:!bg-accent hover:!text-white"
      >
        Опубликовать
      </Button>
      <div className="h-[57px] w-[57px] border border-primary px-[10px] py-[23px] bg-white rounded-[12px] flex items-center justify-center">
        <UserCircleIcon
          onClick={handleProfileClick}
          className="text-primary size-[30px] cursor-pointer"
        />
      </div>
      <AuthModal isAuth={isAuthModal} setIsAuth={setIsAuthModal} />
    </header>
  );
};
