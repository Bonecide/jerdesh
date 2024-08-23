"use client";

import { ProfileTabs } from "@/features/Profile/ProfileTabs";
import { motion } from "framer-motion";
import { Dispatch } from "react";

interface TabsProps {
  setIsOpen: Dispatch<boolean>;
}

export const Tabs = ({ setIsOpen }: TabsProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.3,
      }}
      className="md:absolute fixed z-[9999]  md:right-[20px] md:top-[70px] top-0  "
    >
      <ProfileTabs setIsOpen={setIsOpen} />
    </motion.div>
  );
};
