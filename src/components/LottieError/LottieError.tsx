"use client";
import Lottie from "lottie-react";
import animation from "@/../public/lottie.json";
import Link from "next/link";
export const LottieError = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie
        className="w-[800px]  max-w-full"
        animationData={animation}
        loop={true}
      />
      <p className="text-center text-[25px]">Данная страница не найдена, либо находится в разработке</p>
      <Link href="/" className="text-center text-primary">Перейти на главную страницу</Link>
    </div>
  );
};
