"use client";
import { MapPinIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import {
  Announce,
  announcementsAtom,
  announcementsFiltersAtom,
} from "@/atoms/announcements";
import { useAtomValue, useSetAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { PushpinOutlined } from "@ant-design/icons";
import { useRouter } from "nextjs-toploader/app";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import animation from "@/../public/empty.json";
import Lottie from "lottie-react";
import { clampText } from "@/services/clampText";
interface PostersProps {
  data: Announce[];
}

export const Posters = ({ data }: PostersProps) => {
  useHydrateAtoms([[announcementsAtom, data]]);

  const router = useRouter();
  const locale = useLocale();
  const announcements = useAtomValue(announcementsAtom);
  const filters = useAtomValue(announcementsFiltersAtom);
  const setAnnouncements = useSetAtom(announcementsAtom);

  useEffect(() => {
    if (!filters.category_id && !filters.search && !filters.subway_id) {
      setAnnouncements(data);
    }
  }, [data, setAnnouncements, filters]);

  if (!announcements) return null;

  if (!announcements.length)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Lottie
          className="w-[600px]  max-w-full"
          animationData={animation}
          loop={true}
        />
      </div>
    );
  return (
    <div className="space-y-[15px]">
      <AnimatePresence>
        {announcements.map((item) => (
          <motion.div
            onClick={() => router.push(`/${locale}/items/${item.id}`)}
            whileTap={{
              scale: 0.95,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              x: -100,
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            whileHover={{
              scale: 1.01,
              transition: {
                duration: 0.2,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            key={item.id}
            className={`md:px-[30px] md:py-[27px] py-[25px] px-[20px] flex flex-col md:flex-row  relative justify-between gap-[10px] items-start cursor-pointer ${
              item.announcement_services
                .map((item) => item.status.title)
                .includes("border") &&
              " outline outline-[2px] outline-[#D11010]"
            } ${
              item.announcement_services
                .map((item) => item.status.title)
                .includes("color")
                ? "bg-[#FFD0DB]"
                : "bg-white"
            } shadowPoster w-full md:rounded-[21px] rounded-[13px]`}
          >
            {item.announcement_services
              .map((item) => item.status.title)
              .includes("fix") && (
              <div className="  absolute top-[5px] right-[5px] w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full">
                <PushpinOutlined className=" text-[20px] " />
              </div>
            )}
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[20px] flex-wrap items-center">
                <div className="flex items-center gap-[5px]">
                  <Squares2X2Icon className="size-[20px] text-[#BFBFBF]" />
                  <p className="text-[12px]">{item.category.title}</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <MapPinIcon className="size-[20px] text-[#BFBFBF]" />
                  <p className="text-[12px]">{item.address}</p>
                </div>
              </div>
              <h2 className="text-[16px] font-[500]">{item.title}</h2>
              <p
                className="font-[300] "
                dangerouslySetInnerHTML={{
                  __html: clampText(item.description, 150),
                }}
              />
            </div>

            <div className="md:min-w-[225px] w-full md:w-auto md:min-h-[160px] md:rounded-[21px] rounded-[13px] max-h-[160px] object-cover bg-gray-200 ">
              <Image
                className="md:w-[225px] md:h-[160px] md:rounded-[21px] rounded-[13px] max-h-[160px]  object-contain h-full w-full "
                src={
                  item.images[0]?.path
                    ? BASE_IMAGE_URL + item.images[0].path
                    : ""
                }
                width={225}
                height={160}
                alt="poster"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
