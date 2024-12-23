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
import { useTranslations } from "next-intl";
import { CameraIcon } from "@heroicons/react/24/outline";
import { LoaderIcon } from "react-hot-toast";

export const ProfileData = () => {
  const [isChange, setIsChange] = useState(false);
  const [profile, setProfile] = useAtom(profileAtom);
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);
  const t = useTranslations("root");
  const fetchProfile = useSetAtom(fetchProfileAtom);

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
    };

    loadProfile();
  }, [fetchProfile, setProfile]);

  const userName = useMemo(() => {
    if (!profile?.name && !profile?.last_name) return profile?.email;

    if (!profile.name || !profile.last_name) {
      return profile.name || profile.last_name;
    }
    return profile?.last_name + " " + profile?.name;
  }, [profile]);

  const onChangeLogo = useCallback(
    async (logo: UploadFile<any>) => {
      if (profile && logo.status === "done") {
        setIsPhotoLoading(true);
        const status = await changeLogo(logo, profile.id, profile.email);
        setIsPhotoLoading(false);
        if (status) {
          await fetchProfile();
        }
      }
    },
    [fetchProfile, profile]
  );

  const variants = useMemo(() => {
    return {
      loading: {
        opacity: 1,
      },
      initial: {
        opacity: 0,
      },
    };
  }, []);

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
        <div className="relative w-[100px] h-[100px]">
          <Upload
            disabled={isPhotoLoading}
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
            <motion.div
              variants={variants}
              animate={isPhotoLoading ? "loading" : "initial"}
              whileHover={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="absolute cursor-pointer w-[100px] flex items-center justify-center h-[100px] top-0 rounded-full bg-black/45"
            >
              {isPhotoLoading ? (
                <LoaderIcon className="!size-[20px]" />
              ) : (
                <CameraIcon className="text-gray-100 size-[40px]" />
              )}
            </motion.div>
          </Upload>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 md:gap-[30px]">
          <h3 className="font-[600] text-[20px]">{userName}</h3>
          <div className="flex max-[767px]:mx-auto">
            {!isChange && (
              <Button
                onClick={() => setIsChange(true)}
                className="!h-[44px] px-[17px]"
              >
                {t("profile.change")}
              </Button>
            )}
          </div>
        </div>
      </div>
      <ProfileForm isChange={isChange} setIsChange={setIsChange} />
    </motion.div>
  );
};
