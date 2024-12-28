"use client";
import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

const Success = () => {
  const locale = useLocale();

  return redirect({ href: "/profile?tab=addMoney&status=success", locale });
};

export default Success;
