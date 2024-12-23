"use client";

import { fetchVipSevicesAtom, vipSevicesAtom } from "@/atoms/profile";
import { useAtomValue, useSetAtom } from "jotai";

import { motion } from "framer-motion";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { handleSubscribe } from "@/services/handleSubscribe";

export const VipServices = () => {
  const vips = useAtomValue(vipSevicesAtom);
  const fetchVips = useSetAtom(fetchVipSevicesAtom);
  const t = useTranslations("root.profile.vipsTab");

  const [isLoading, setIsLoading] = useState(false);

  const onSubscribe = useCallback(
    (pricing_id: number) => async () => {
      setIsLoading(true);
      await handleSubscribe(pricing_id);
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    fetchVips();
  }, [fetchVips]);

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
        {vips.map((item) => (
          <div
            key={item.id}
            className="border border-primary p-[25px] group hover:bg-primary transition-colors duration-300 rounded-[9px] max-w-[300px] w-full"
          >
            <h3 className="text-center text-primary group-hover:text-white transition-colors duration-300 text-[22px] font-[600]">
              {t("title", { title: item.title })}
            </h3>
            <div className="flex flex-col gap-[15px] mt-[70px]">
              <p className="group-hover:text-white transition-colors duration-300 text-[16px]">
                {t("discount", { discount: String(item.discount) })}
              </p>
              <p className="group-hover:text-white transition-colors duration-300 text-[16px]">
                {t("count", { amount: item.ads_count })}
              </p>
            </div>
            <div className="mt-[50px] flex flex-col gap-[20px]">
              {item.pricing_vip_services.map((price) => (
                <Button
                  loading={isLoading}
                  onClick={onSubscribe(price.id)}
                  type="primary"
                  className="w-full !h-[50px] group-hover:!bg-white group-hover:!text-black transition-colors duration-300"
                  key={price.id}
                >
                  {t("days", { amount: String(price.day_count) })} /{" "}
                  {t("price", { amount: String(price.price) })}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
