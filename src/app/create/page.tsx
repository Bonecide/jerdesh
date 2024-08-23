import { CreateAddForm } from "@/features/CreateAddForm";
import React from "react";


const Create = () => {
  return (
    <div className="containerBlock flex flex-col items-center">
      <h2 className="text-[24px] font-[500] mt-[30px]">Создать Объявление</h2>
      <CreateAddForm />
    </div>
  );
};

export default Create;
