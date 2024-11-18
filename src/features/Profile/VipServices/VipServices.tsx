"use client";

import { vipSevicesAtom } from "@/atoms/profile";
import { useAtomValue } from "jotai";

import { motion } from "framer-motion";

export const VipServices = () => {
  const vips = useAtomValue(vipSevicesAtom);

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
    >
      <div className="flex w-full justify-center gap-[40px]">
        {vips.map((item) => (
          <div key={item.id}>
            
          </div>
        ))}
      </div>
    </motion.div>
  );
};
