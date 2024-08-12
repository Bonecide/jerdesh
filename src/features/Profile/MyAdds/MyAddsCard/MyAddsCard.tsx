"use client";
import { MyAdd } from "@/utils/mock";
import { PushpinOutlined } from "@ant-design/icons";
import {
  ChevronDoubleUpIcon,
  MapPinIcon,
  PencilIcon,
  Squares2X2Icon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Checkbox } from "antd";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type CardType = "common" | "border" | "fill";
export const MyAddsCard = ({ item }: { item: MyAdd }) => {
  const [currentType, setCurrentType] = useState<CardType>("common");

  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      className={` p-[20px] duration-300 transition-all shadowPoster w-full rounded-[21px] ${
        (item.isBorder || currentType === "border") &&
        "border-[2px] border-[#D11010]"
      } ${
        item.isColor || currentType === "fill" ? "bg-[#FFD0DB]" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-[15px]">
          <p className="font-[500]">
            Дата публикации :{" "}
            <span className="font-[300]">
              {new Date(item.createdAt).toLocaleDateString("ru-RU")}
            </span>
          </p>
          <p className="font-[500]">
            Последнее обновление :{" "}
            <span className="font-[300]">
              {new Date(item.updatedAt).toLocaleDateString("ru-RU")}
            </span>
          </p>
        </div>
        <div className="flex gap-[5px]">
          <Checkbox defaultChecked={item.isActive} />
          <p>Активное</p>
        </div>

        <div className="flex gap-[10px]">
          <div className="size-[30px] rounded-full bg-primary flex items-center justify-center cursor-pointer">
            <PencilIcon className="text-white size-[18px]" />
          </div>
          <div className="size-[30px] rounded-full bg-[#F6001E] flex items-center justify-center cursor-pointer">
            <TrashIcon className="text-white size-[18px]" />
          </div>
        </div>
      </div>
      <div
        className={`mt-[20px] flex justify-between items-end cursor-pointer w-full rounded-[21px]`}
      >
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[20px] items-center">
            <div className="flex items-center gap-[5px]">
              <Squares2X2Icon className="size-[20px] text-[#BFBFBF]" />
              <p className="text-[12px]">Категория</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <MapPinIcon className="size-[20px] text-[#BFBFBF]" />
              <p className="text-[12px]">Место</p>
            </div>
          </div>
          <h2 className="text-[16px] font-[500]">{item.title}</h2>
          <p className="font-[300]">{item.description}</p>
        </div>
        <Image
          className="w-[225px] h-[160px]"
          src={item.images[0]}
          width={225}
          height={160}
          alt="poster"
        />
      </div>
      <div className="flex justify-between flex-wrap gap-y-[20px] mt-[20px]">
        <Button
          icon={<ChevronDoubleUpIcon className="text-white size-[18px]" />}
          className="!bg-accent !h-[40px] !px-[30px] !text-white !border-none"
        >
          Поднять объявление
        </Button>
        {!item.isBorder && (
          <Button
            onMouseLeave={() => setCurrentType("common")}
            onMouseEnter={() => setCurrentType("border")}
            icon={
              <div className="w-[15px] h-[12px]  border-[2px] border-white" />
            }
            className="!bg-[#5CB85C] !h-[40px] !px-[30px] !text-white !border-none"
          >
            Выделить рамкой
          </Button>
        )}
        {!item.isColor && (
          <Button
            onMouseLeave={() => setCurrentType("common")}
            onMouseEnter={() => setCurrentType("fill")}
            icon={
              <Image
                src={"/paintIcon.svg"}
                width={18}
                height={18}
                alt="paint"
              />
            }
            className="!bg-[#5CB85C] !h-[40px] !px-[30px] !text-white !border-none"
          >
            Выделить цветом
          </Button>
        )}
        {!item.isPinned && (
          <Button
            icon={<PushpinOutlined className="text-white text-[20px]" />}
            className="!bg-[#5CB85C] !h-[40px] !px-[30px] !text-white !border-none"
          >
            Закрепить
          </Button>
        )}
      </div>
    </motion.div>
  );
};
