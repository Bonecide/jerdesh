"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "antd";
import { PlusIcon } from "@heroicons/react/24/outline";
import useCategory from "@/hooks/useCategory";
import { CategoryItem } from "./CategoryItem";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { categories } = useCategory();

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
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
            <div className="">
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
                  <CategoryItem onClose={onClose} key={item.id} item={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
