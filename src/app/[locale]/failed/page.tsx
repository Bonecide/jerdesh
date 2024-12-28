"use client";
import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

const Failed = () => {
  const locale = useLocale();

  return redirect({ href: "/profile?tab=addMoney&status=failed", locale });
};

export default Failed;
