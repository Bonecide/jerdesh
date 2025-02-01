import { Announce } from "@/atoms/announcements";
import { Item } from "@/features/ItemPage/Item";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { notFound } from "next/navigation";
import React from "react";

interface ItemDetailsProps {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: ItemDetailsProps) {
  try {
    let response = await baseGetRequest(`announcement/${params.id}`, {
      config: { isServer: true },
    });

    const announce = response as { data?: Announce };
    if (!announce.data) throw new Error("Announcement not found");

    return {
      title: `${announce.data.title} | Jerdeshkg.ru`,
      description: announce.data.description,
      openGraph: {
        images: [`${BASE_IMAGE_URL + announce.data.images[0]?.path}`],
        title: `${announce.data.title} | Jerdeshkg.ru`,
        description: announce.data.description,
      },
    };
  } catch {
    return {
      title: "Объявление не найдено",
      description: "К сожалению, запрашиваемое объявление не существует.",
    };
  }
}

const ItemDetails = async ({ params }: ItemDetailsProps) => {
  try {
    let data = await baseGetRequest(`announcement/${params.id}`, {
      config: { isServer: true },
    });
    const announce = data as { data?: Announce };
    if (!announce.data) return notFound(); // Проверяем `success` и наличие `data`

    return (
      <div className="containerBlock">
        <Item item={announce.data} />
      </div>
    );
  } catch {
    return notFound(); // Ошибка запроса -> 404
  }
};

export default ItemDetails;
