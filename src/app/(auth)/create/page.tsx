import { Subway } from "@/atoms/subways";
import { CreateAddForm } from "@/features/CreateAddForm";
import { baseGetRequest } from "@/services/utils/rentalFetch/baseGetRequest";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Создать объявление | Jerdesh",
  description: "Jerdesh",
};
const Create = async () => {
  const subways = await baseGetRequest<Subway[]>("subways", {
    config: {
      isServer: true,
    },
  });
  return (
    <div className="containerBlock flex flex-col items-center">
      <h2 className="text-[24px] font-[500] mt-[30px]">Создать Объявление</h2>
      <CreateAddForm subways={subways.data} />
    </div>
  );
};

export default Create;
