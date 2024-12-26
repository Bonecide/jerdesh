"use client";
import { motion } from "framer-motion";
import { Payment } from "./Payment";
import { TransactionHistory } from "./TransactionHistory";
import { useTranslations } from "next-intl";

export const AddMoney = () => {

  const t = useTranslations('root')
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
      className="w-full flex flex-col gap-[16px] md:gap-6 "
    >
      <p className="text-[20px] max-[767px]:text-[22px] max-[767px]:text-center font-[500]">
        {t('profile.addMoney')}
      </p>
      <Payment />
      {/* <TransactionHistory /> */}
    </motion.div>
  );
};
