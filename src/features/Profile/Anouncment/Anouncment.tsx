"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
export const Anouncment = () => {
  const t = useTranslations("root.profile.announce");
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
      {/* {[].map((item) => (
        <div
          className="w-full rounded-[24px] myAddShadow p-[20px] bg-white space-y-[12px]"
          key={item.id}
        >
          <div className="flex items-center gap-[15px] max-[767px]:gap-2 max-[767px]:flex-col">
            <p className="font-[500]">
              {t("publishDate")}{" "}
              <span className="font-[300]">
                {new Date(item.created_at).toLocaleDateString("ru-RU")}
              </span>
            </p>
            <p className="font-[500]">
              {t("lastUpldate")}{" "}
              <span className="font-[300]">
                {new Date(item.updated_at).toLocaleDateString("ru-RU")}
              </span>
            </p>
          </div>
          <h3 className="font-[500] text-[20px]">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))} */}
    </motion.div>
  );
};
