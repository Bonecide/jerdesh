"use client";
import { userAtom } from "@/atoms/user";
import { Button } from "antd";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useState } from "react";
import { ProfileForm } from "./ProfileForm";

import { motion } from "framer-motion";

export const ProfileData = () => {
  const [isChange, setIsChange] = useState(false);
  const user = useAtomValue(userAtom);

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
    >
      <div className="flex gap-[15px]">
        {user.image && (
          <Image
            src={user.image}
            width={183}
            height={183}
            alt="userImage"
            className="rounded-full w-[100px] h-[100px] object-cover"
          />
        )}
        <div className="flex flex-col items-start justify-between gap-[30px]">
          <h3 className="font-[600] text-[20px]">{user.name}</h3>
          <div className="flex ">
            {!isChange && (
              <Button
                onClick={() => setIsChange(true)}
                className="!h-[44px] px-[17px]"
              >
                Изменить профиль
              </Button>
            )}
          </div>
        </div>
      </div>
      <ProfileForm isChange={isChange} setIsChange={setIsChange} />
    </motion.div>
  );
};
