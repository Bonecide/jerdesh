"use client";

import { replenishmentAmountsAtom } from "@/atoms/replenishmentAmounts";
import { useRefetchableAtom } from "@/hooks/useRefetchableAtom";
import { replenishBalance } from "@/services/replenishBalance";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export const Payment = () => {
  const amounts = useRefetchableAtom(replenishmentAmountsAtom);
  const t = useTranslations("root");
  const [currentPayment, setCurrentPayment] = useState<number>();

  const onConfirm = useCallback(async () => {
    if (currentPayment !== undefined) {
      const toastId = toast.loading(t('main.loading'));
      const payUrl = await replenishBalance(currentPayment);
      toast.dismiss(toastId);

      if (payUrl) {
        window.location.href = payUrl;
      }
    }
  }, [currentPayment,t]);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-center text-[20px] font-[500]">
        {t("profile.fixPayment")}
      </h2>
      <div className="mt-[30px] flex max-[330px]:flex-col gap-[22px] flex-wrap max-[767px]:justify-center">
        {amounts.map((item) => (
          <div
            className={`cursor-pointer rounded-[15px] max-[330px]:px-2 max-[330px]:py-3 py-[27px] transition-all duration-300 w-[183px] max-[330px]:max-w-[98px]  max-[767px]:max-w-[118px] text-center ${
              currentPayment === item.id
                ? "text-white bg-primary"
                : "border border-primary text-primary"
            }`}
            onClick={() => setCurrentPayment(item.id)}
            key={item.id}
          >
            {item.amount} Р
          </div>
        ))}
      </div>
      <Button
        onClick={onConfirm}
        type="primary"
        className="!h-[46px] mt-[30px] !px-[40px] max-[767px]:!px-[80px]"
        disabled={!currentPayment}
      >
        {t("profile.addMoney")}
      </Button>
    </div>
  );
};
