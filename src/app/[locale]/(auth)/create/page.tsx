import { Subway } from "@/atoms/subways";
import { CreateAddForm } from "@/features/CreateAddForm";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "root.metadata.create" });

  return {
    title: t("title"),
  };
}
const Create = async () => {
  const t = await getTranslations("root");
  const subways = await baseGetRequest<Subway[]>("subways", {
    config: {
      isServer: true,
    },
  });
  return (
    <div className="containerBlock flex flex-col items-center">
      <h2 className="text-[24px] font-[500] mt-[30px]">{t("create.add")}</h2>
      <CreateAddForm subways={subways.data} />
    </div>
  );
};

export default Create;
