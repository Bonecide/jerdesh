"use client";

import { Button } from "antd";
import { useState } from "react";

const PAYMENT_VALUE = [100, 500, 1000, 5000];

export const Payment = () => {
  const [currentPayment, setCurrentPayment] = useState<number>();
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-center text-[20px] font-[500]">
        Фиксированный платеж
      </h2>
      <div className="mt-[30px] flex max-[330px]:flex-col gap-[22px] flex-wrap max-[767px]:justify-center">
        {PAYMENT_VALUE.map((item) => (
          <div
            className={`cursor-pointer rounded-[15px] max-[330px]:px-2 max-[330px]:py-3 py-[27px] transition-all duration-300 w-[183px] max-[330px]:max-w-[98px]  max-[767px]:max-w-[118px] text-center ${
              currentPayment === item
                ? "text-white bg-primary"
                : "border border-primary text-primary"
            }`}
            onClick={() => setCurrentPayment(item)}
            key={item}
          >
            {item} Р
          </div>
        ))}
      </div>
      <Button
        type="primary"
        className="!h-[46px] mt-[30px] !px-[40px] max-[767px]:!px-[80px]"
        disabled={!currentPayment}
      >
        Пополнить счёт
      </Button>
    </div>
  );
};
