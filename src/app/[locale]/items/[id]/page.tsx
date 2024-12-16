import { Announce } from "@/atoms/announcements";
import { Item } from "@/features/ItemPage/Item";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
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
    title: `${data.title} | Jerdesh`,
    description: data.description,
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
