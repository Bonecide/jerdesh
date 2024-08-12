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
      <div className="mt-[30px] flex gap-[22px] flex-wrap">
        {PAYMENT_VALUE.map((item) => (
          <div
            className={`cursor-pointer rounded-[15px] py-[27px] transition-all duration-300 px-[45px] ${
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
        className="!h-[46px] mt-[30px] !px-[40px]"
        disabled={!currentPayment}
      >
        Пополнить счёт
      </Button>
    </div>
  );
};
