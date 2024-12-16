"use client";

import { MyAddsCard } from "./MyAddsCard";

import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { profileAnnouncementsAtom } from "@/atoms/profile";
import { announcementsServicesAtom } from "@/atoms/announcements/announcementsServices.atoms";

export const MyAdds = () => {
  const myAnons = useAtomValue(profileAnnouncementsAtom);

  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      className="w-full grid grid-cols-1 gap-[30px]"
    >
      {myAnons.map((item) => (
        <MyAddsCard item={item} key={item.id} />
      ))}
    </motion.div>
  );
};
