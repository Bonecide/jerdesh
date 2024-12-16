"use client";

import { Button, Upload, UploadFile } from "antd";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProfileForm } from "./ProfileForm";

import { motion } from "framer-motion";
import { fetchProfileAtom, profileAtom } from "@/atoms/profile";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { changeLogo } from "@/services/changeLogo";

export const ProfileData = () => {
  const [isChange, setIsChange] = useState(false);
  const [profile, setProfile] = useAtom(profileAtom);
  const fetchProfile = useSetAtom(fetchProfileAtom);

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
    };

    if (!profile) loadProfile();
  }, [fetchProfile, profile, setProfile]);

  const userName = useMemo(() => {
    if (!profile?.name) return "";
    return profile?.last_name + " " + profile?.name;
  }, [profile]);

  const onChangeLogo = useCallback(
    async (logo: UploadFile<any>) => {
      if (profile && logo.status === "done") {
        const status = await changeLogo(logo, profile.id, profile.email);

        if (status) {
          fetchProfile();
        }
      }
    },
    [fetchProfile, profile]
  );

  if (!profile) return <div />;
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
      <div className="flex flex-col md:flex-row items-center gap-[12px]">
        <Upload
          accept="image/*"
          showUploadList={false}
          onChange={(info) => onChangeLogo(info.file)}
        >
          <Image
            src={
              profile.logo
                ? BASE_IMAGE_URL + profile.logo
                : "/images/emptyUser.jpg"
            }
            width={183}
            height={183}
            alt="userImage"
            className="rounded-full w-[100px] h-[100px] object-cover cursor-pointer"
          />
        </Upload>
        <div className="flex flex-col items-start justify-between gap-4 md:gap-[30px]">
          <h3 className="font-[600] text-[20px]">{userName}</h3>
          <div className="flex max-[767px]:mx-auto">
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
