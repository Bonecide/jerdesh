"use client";
import Lottie from "lottie-react";
import animation from "@/../public/loading.json";
import { motion } from "framer-motion";
export const FullScreenLoader = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed w-full h-full flex justify-center items-center bg-white z-[99999]"
    >
      <Lottie
        className="w-[600px]  max-w-full"
        animationData={animation}
        loop={true}
      />
    </motion.div>
  );
};
