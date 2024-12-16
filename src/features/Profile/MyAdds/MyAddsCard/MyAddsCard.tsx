"use client";
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
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  Announce,
  Announcement_Service,
  AnnounceWithImages,
} from "@/atoms/announcements";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useRouter } from "nextjs-toploader/app";
import { ActionModal } from "./ActionModal";

type CardType = "common" | "border" | "fill";
export const MyAddsCard = ({ item }: { item: AnnounceWithImages }) => {
  const router = useRouter();

  const [currentType, setCurrentType] = useState<CardType>("common");
  const [actionType, setActionType] = useState<Announcement_Service>();
  const [isOpenAction, setIsOpenAction] = useState(false);

  const onClickEdit = useCallback(() => {
    router.push(`/edit/${item.id}`);
  }, [router, item]);

  const onClickAction = useCallback(
    (type: Announcement_Service) => () => {
      setActionType(type);
      setIsOpenAction(true);
    },
    []
  );

  return (
    <>
      <ActionModal
        setIsOpen={setIsOpenAction}
        isOpen={isOpenAction}
        type={actionType!}
        id={item.id}
      />
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
        className={` p-[20px] duration-300 transition-all outline-none shadowPoster w-full rounded-[21px] ${
          (item.announcement_services.includes("border") ||
            currentType === "border") &&
          "outline-[2px] outline outline-[#D11010]"
        } ${
          item.announcement_services.includes("color") || currentType === "fill"
            ? "bg-[#fdd2dc]"
            : "bg-white"
        }`}
      >
        <div className="flex max-[767px]:flex-col max-[767px]:px-[14px] items-center justify-between max-[767px]:text-center">
          <div className="flex max-[767px]:flex-col gap-2 md:gap-[15px]">
            <p className="font-[500]">
              Дата публикации :{" "}
              <span className="font-[300]">
                {new Date(item.created_at).toLocaleDateString("ru-RU")}
              </span>
            </p>
            <p className="font-[500]">
              Последнее обновление :{" "}
              <span className="font-[300]">
                {new Date(item.updated_at).toLocaleDateString("ru-RU")}
              </span>
            </p>
          </div>

          <div className="flex w-[225px] max-[767px]:w-full mt-2">
            <div className="flex gap-[5px] flex-1 items-center">
              <Checkbox defaultChecked={true} />
              <p>Активное</p>
            </div>

            <div className="flex gap-[10px]">
              <div
                className="size-[30px] rounded-full bg-primary flex items-center justify-center cursor-pointer"
                onClick={onClickEdit}
              >
                <PencilIcon className="text-white size-[18px]" />
              </div>
              <div className="size-[30px] rounded-full bg-[#F6001E] flex items-center justify-center cursor-pointer">
                <TrashIcon className="text-white size-[18px]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mt-4 md:mt-[20px] flex max-[767px] flex-col md:flex-row justify-between items-start cursor-pointer w-full rounded-[21px]`}
        >
          <div className="flex flex-col gap-[15px] max-[767px]:mb-4">
            <div className="flex gap-[20px]  items-center max-[767px]:px-[14px] max-[767px]:justify-between">
              <div className="flex items-center gap-[5px]">
                <Squares2X2Icon className="size-[20px] text-[#BFBFBF]" />
                <p className="text-[12px]">{item.category.title}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <MapPinIcon className="size-[20px] text-[#BFBFBF]" />
                <p className="text-[12px]">{item.address}</p>
              </div>
            </div>
            <h2 className="text-[16px] font-[500] max-[767px]:mt-3 max-[767px]:text-center">
              {item.title}
            </h2>
            <p className="font-[300]">{item.description}</p>
          </div>
          <Image
            className="md:w-[225px] md:h-[160px] object-cover rounded-[21px]  w-full"
            src={BASE_IMAGE_URL + item.images[0]?.path}
            width={225}
            height={160}
            alt="poster"
          />
        </div>
        <div className="flex justify-between flex-wrap gap-y-[20px] mt-[20px]">
          <Button
            onClick={onClickAction("raise")}
            icon={<ChevronDoubleUpIcon className="text-white size-[18px]" />}
            className="!bg-accent !h-[40px] !px-[30px] !text-white !border-none max-[767px]:w-full max-[767px]:!h-[49px]"
          >
            Поднять объявление
          </Button>
          {!item.announcement_services.includes("border") && (
            <Button
              onClick={onClickAction("border")}
              onMouseLeave={() => setCurrentType("common")}
              onMouseEnter={() => setCurrentType("border")}
              icon={
                <div className="w-[15px] h-[12px]  border-[2px] border-white" />
              }
              className="!bg-[#5CB85C] !h-[40px] !px-[30px] !text-white !border-none max-[767px]:w-full max-[767px]:!h-[49px]"
            >
              Выделить рамкой
            </Button>
          )}
          {!item.announcement_services.includes("color") && (
            <Button
              onClick={onClickAction("color")}
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
              className="!bg-[#5CB85C] !h-[40px] !px-[30px] !text-white !border-none max-[767px]:w-full max-[767px]:!h-[49px]"
            >
              Выделить цветом
            </Button>
          )}
          {!item.announcement_services.includes("fix") && (
            <Button
              onClick={onClickAction("fix")}
              icon={<PushpinOutlined className="text-white text-[20px]" />}
              className="!bg-[#5CB85C] !h-[40px] !px-[30px] !text-white !border-none max-[767px]:w-full max-[767px]:!h-[49px]"
            >
              Закрепить
            </Button>
          )}
        </div>
      </motion.div>
    </>
  );
};
