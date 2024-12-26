"use client";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { ProfileTabs } from "./ProfileTabs";
import { MyAdds } from "./MyAdds";
import { AnimatePresence } from "framer-motion";
import { ProfileData } from "./ProfileData";
import { Anouncment } from "./Anouncment";
import { AddMoney } from "./AddMoney";
import { useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { tabAtom } from "@/atoms/profile";
import { VipServices } from "./VipServices";
import { Settings } from "./ProfileTabs/Settings";
import toast from "react-hot-toast";

export type TabSlug =
  | "profile"
  | "adds"
  | "vips"
  // | "announcement"
  | "addMoney"
  | "settings";

export type Tab = {
  slug: TabSlug;
};

export const ProfilePage = () => {
  const [currentTab, setCurrentTab] = useAtom(tabAtom);

  const searchParams = useSearchParams();

  const statusText = useMemo(() => {
    return {
      success: "Платёж успешно исполнен!",
      failed:
        "Платёж не исполнен, проверьте свой способ оплаты либо попробуйте ещё раз!",
    };
  }, []);
  const Tabs: Record<TabSlug, ReactNode> = {
    profile: <ProfileData />,
    adds: <MyAdds />,
    // announcement: <Anouncment />,
    addMoney: <AddMoney />,
    settings: <Settings />,
    vips: <VipServices />,
  };

  useEffect(() => {
    setCurrentTab(searchParams.get("tab") as TabSlug);
  }, [searchParams, setCurrentTab]);
  const hasShownToast = useRef(false); 

  useEffect(() => {
    const status = searchParams.get("status");

    if (!hasShownToast.current && status) {
      hasShownToast.current = true;
      if (status === "success") {
        toast.success("Платёж успешно исполнен!");
      }
      if (status === "failed") {
        toast.error(
          "Платёж не исполнен, проверьте свой способ оплаты либо попробуйте ещё раз!"
        );
      }
    }
  }, [searchParams]);
  return (
    <div className="flex gap-[80px]">
      <div className="flex-1">
        <AnimatePresence> {Tabs[currentTab]} </AnimatePresence>
      </div>
      <div className="flex-2 hidden lg:block">
        <ProfileTabs />
      </div>
    </div>
  );
};
