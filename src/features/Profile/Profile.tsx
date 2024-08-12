"use client";
import { ReactNode, useState } from "react";
import { ProfileTabs } from "./ProfileTabs";
import { MyAdds } from "./MyAdds";
import { AnimatePresence } from "framer-motion";
import { ProfileData } from "./ProfileData";
import { Anouncment } from "./Anouncment";
import { AddMoney } from "./AddMoney";

export type TabSlug =
  | "profile"
  | "adds"
  | "vips"
  | "announcement"
  | "addMoney"
  | "settings";

export type Tab = {
  title: string;
  slug: TabSlug;
};

export const ProfilePage = () => {
  const [currentTab, setCurrentTab] = useState<TabSlug>("profile");

  const Tabs: Record<TabSlug, ReactNode> = {
    profile: <ProfileData />,
    adds: <MyAdds />,
    announcement: <Anouncment />,
    addMoney: <AddMoney />,
    settings: null,
    vips: null,
  };
  return (
    <div className="flex gap-[80px]">
      <div className="flex-1">
        <AnimatePresence> {Tabs[currentTab]} </AnimatePresence>
      </div>
      <div className="flex-2">
        <ProfileTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </div>
  );
};
