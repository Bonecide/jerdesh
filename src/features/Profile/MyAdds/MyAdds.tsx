"use client";

import { MyAddsCard } from "./MyAddsCard";

import { motion } from "framer-motion";
import { profileAnnouncementsAtom } from "@/atoms/profile";
import { useRefetchableAtom } from "@/hooks/useRefetchableAtom";

export const MyAdds = () => {
  const myAnons = useRefetchableAtom(profileAnnouncementsAtom);

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
