import { Announce } from "@/atoms/announcements";
import { Item } from "@/features/ItemPage/Item";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import React from "react";

interface ItemDetailsProps {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: ItemDetailsProps) {
  let { data } = await baseGetRequest<Announce>(`announcement/${params.id}`, {
    config: {
      isServer: true,
    },
  });

  return {
    title: `${data.title} | Jerdeshkg.ru`,
    description: data.description,
    openGraph: {
      images: [`${BASE_IMAGE_URL + data.images[0].path}`],
      title: `${data.title} | Jerdeshkg.ru`,
      description: data.description,
    },
  };
}

const ItemDetails = async ({ params }: ItemDetailsProps) => {
  let { data } = await baseGetRequest<Announce>(`announcement/${params.id}`, {
    config: {
      isServer: true,
    },
  });

  return (
    <div className="containerBlock">
      <Item item={data} />
    </div>
  );
};

export default ItemDetails;
