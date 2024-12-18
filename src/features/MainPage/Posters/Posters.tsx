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
            className={`md:px-[27px] md:py-[20px] p-[12px] flex flex-col md:flex-row  relative justify-between gap-[10px] items-start cursor-pointer ${
              item.announcement_services.includes("border") &&
              " outline outline-[2px] outline-[#D11010]"
            } ${
              item.announcement_services.includes("color")
                ? "bg-[#FFD0DB]"
                : "bg-white"
            } shadowPoster w-full md:rounded-[21px] rounded-[13px]`}
          >
            {item.announcement_services.includes("fix") && (
              <PushpinOutlined className=" text-[20px] absolute top-[10px] right-[10px]" />
            )}
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[20px] items-center">
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
              <p className="font-[300] line-clamp-3">{item.description}</p>
            </div>

            <div className="md:min-w-[225px] md:min-h-[160px] md:rounded-[21px] rounded-[13px] max-h-[160px] object-cover w-full bg-gray-200 ">
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
