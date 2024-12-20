import { Announce } from "@/atoms/announcements";
import { City } from "@/atoms/cities";
import { Subway } from "@/atoms/subways";
import { CreateAddForm } from "@/features/CreateAddForm";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface IEditAnnounce {
  params: {
    id: number;
  };
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "root.metadata.edit" });

  return {
    title: t("title"),
  };
}
const EditAnnounce = async ({ params }: IEditAnnounce) => {
  const t = await getTranslations("root");
  let { data } = await baseGetRequest<Announce>(`announcement/${params.id}`, {
    config: {
      isServer: true,
    },
  });
  // const subways = await baseGetRequest<Subway[]>("subways", {
  //   config: {
  //     isServer: true,
  //   },
  // });

  const citiesData = await baseGetRequest<City[]>("cities", {
    config: {
      isServer: true,
    },
  });
  const cities = citiesData.data;

  return (
    <div className="containerBlock flex flex-col items-center">
      <h2 className="text-[24px] font-[500] mt-[30px]">{t("edit.edit")}</h2>
      <CreateAddForm cities={cities} announce={data} />
    </div>
  );
};

export default EditAnnounce;
