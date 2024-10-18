import { Item } from "@/features/ItemPage/Item";
import { ADDS } from "@/utils/mock";
import React from "react";
import Skeleton from "react-loading-skeleton";

interface ItemDetailsProps {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params, searchParams }: any) {
  let data = ADDS[params.id];

  return {
    title: `${data.title} | Jerdesh`,
    description: "Jerdesh",
  };
}

const ItemDetails = ({ params }: ItemDetailsProps) => {
  const item = ADDS[params.id];
  return (
    <div className="containerBlock">
      <Item item={item} />
    </div>
  );
};

export default ItemDetails;
