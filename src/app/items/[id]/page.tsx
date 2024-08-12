import { Item } from "@/features/ItemPage/Item";
import { Recomendation } from "@/features/ItemPage/Recomendation";
import { ADDS } from "@/utils/mock";
import { Metadata } from "next";
import React from "react";

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
    <div className="container">
      <Item item={item} />
    </div>
  );
};

export default ItemDetails;
