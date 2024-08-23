"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { categories } from "@/utils/mock";
import { Button } from "antd";
import { PlusIcon } from "@heroicons/react/24/outline";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden block">
      <div onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu className="text-primary w-[40px] h-[40px] cursor-pointer" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              x: -300,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -300,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white h-[100dvh] p-[20px] overflow-auto md:w-[300px] w-full fixed left-0 top-0 z-[99999]"
          >
            <div className="containerBlock">
              <IoCloseSharp
                className="w-[20px] h-[20px]  text-primary cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <Button
                icon={<PlusIcon className="text-white size-[11px] " />}
                className="w-full !bg-accent !text-white hover:!bg-accent !border-none  mt-[12px]"
              >
                Опубликовать
              </Button>
              <div className=" flex-col  mt-[16px] gap-[5px] w-full flex ">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="flex  items-center gap-[10px] cursor-pointer w-[210px]"
                  >
                    <div className="size-[10px] min-w-[10px] bg-primary rounded-full" />
                    <p className="text-[#02203B] text-[10px]">
                      {item.name} ({item.count})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
