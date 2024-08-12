"use client";
import { MY_ADDS } from "@/utils/mock";
import { MyAddsCard } from "./MyAddsCard";

import { AnimatePresence, motion } from "framer-motion";

export const MyAdds = () => {
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
      {MY_ADDS.map((item) => (
        <MyAddsCard item={item} key={item.id} />
      ))}
    </motion.div>
  );
};
