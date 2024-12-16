"use client";

import { vipSevicesAtom } from "@/atoms/profile";
import { useAtomValue } from "jotai";

import { motion } from "framer-motion";
import { VIPS } from "@/utils/mock";
import { Button } from "antd";

export const VipServices = () => {
  // const vips = useAtomValue(vipSevicesAtom);

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
      <div className="flex w-full justify-center  flex-wrap gap-[40px]">
        {VIPS.map((item) => (
          <div
            key={item.id}
            className="border border-primary p-[25px] group hover:bg-primary transition-colors duration-300 rounded-[9px] w-[300px] max-w-full"
          >
            <h3 className="text-center text-primary group-hover:text-white transition-colors duration-300 text-[22px] font-[600]">
              {item.title} - Подписка
            </h3>
            <div className="flex flex-col gap-[15px] mt-[70px]">
              <p className="group-hover:text-white transition-colors duration-300 text-[16px]">
                {item.discount}% Скидка
              </p>
              <p className="group-hover:text-white transition-colors duration-300 text-[16px]">
                {item.ads_count} Объявлений максимум
              </p>
            </div>
            <div className="mt-[50px] flex flex-col gap-[20px]">
              {item.pricing_vip_services.map((price) => (
                <Button
                  type="primary"
                  className="w-full !h-[50px] group-hover:!bg-white group-hover:!text-black transition-colors duration-300"
                  key={price.id}
                >
                  {price.day_count} дней / {price.price} рублей
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
