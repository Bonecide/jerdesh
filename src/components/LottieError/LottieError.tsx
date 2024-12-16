"use client";
import Lottie from "lottie-react";
import animation from "@/../public/lottie.json";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
const LottieError = () => {
  const locale = useLocale();
  const t = useTranslations("root");
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie
        className="w-[800px]  max-w-full"
        animationData={animation}
        loop={true}
      />
      <p className="text-center text-[25px]">{t("notFound.notFound")}</p>
      <Link locale={locale} href="/" className="text-center text-primary">
        {t("notFound.redirect")}
      </Link>
    </div>
  );
};

export default LottieError;
