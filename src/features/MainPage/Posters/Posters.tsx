"use client";
import { MapPinIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Announce, announcementsAtom } from "@/atoms/announcements";
import { useAtomValue } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

interface PostersProps {
  data: Announce[];
}

export const Posters = ({ data }: PostersProps) => {
  useHydrateAtoms([[announcementsAtom, data]]);
  const router = useRouter();
  const announcements = useAtomValue(announcementsAtom);

  if (!announcements) return null;
  return (
    <div className="space-y-[15px]">
      {announcements.map((item) => (
        <motion.div
          onClick={() => router.push(`/items/${item.id}`)}
          whileTap={{
            scale: 0.95,
            transition: {
              duration: 0.2,
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
            type: "spring",
          }}
          key={item.id}
          className={`md:px-[27px] md:py-[20px] p-[12px] flex flex-col md:flex-row justify-between items-end cursor-pointer ${
            item.status === "vip" && " outline outline-[2px] outline-[#D11010]"
          } ${
            item.status === "premium" ? "bg-[#FFD0DB]" : "bg-white"
          } shadowPoster w-full md:rounded-[21px] rounded-[13px]`}
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
            className="md:w-[225px] md:h-[160px] w-full "
            src={item.images[0]}
            width={225}
            height={160}
            alt="poster"
          />
        </motion.div>
      ))}
    </div>
  );
};
