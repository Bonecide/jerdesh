"use client";

import { fetchProfileAtom, profileAtom } from "@/atoms/profile";
import { updateProfileData } from "@/services/profile/updateProfileData";
import { Button, Form, Input } from "antd";
import { useAtomValue, useSetAtom } from "jotai";
import { useTranslations } from "next-intl";
import { Dispatch, useCallback } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
interface ProfileForm {
  isChange: boolean;
  setIsChange: Dispatch<boolean>;
}

export interface ProfileData {
  name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}
export const ProfileForm = ({ isChange, setIsChange }: ProfileForm) => {
  const user = useAtomValue(profileAtom);
  const refetchUser = useSetAtom(fetchProfileAtom);

  const t = useTranslations("root");
  const onFinish = useCallback(
    async (data: ProfileData) => {
      const toastId = toast.loading(t("main.loading"));
      const status = await updateProfileData(data, user!.id);
      toast.dismiss(toastId);

      if (status) {
        setIsChange(false);
        await refetchUser();
      }
    },
    [refetchUser, setIsChange, user, t]
  );
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col max-[767px]:!mt-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[40px]">
        <Form.Item
          initialValue={user?.name}
          name="name"
          label={t("main.name")}
          className="max-[767px]:!m-0"
        >
          <Input disabled={!isChange} name="name" className="w-full h-[50px]" />
        </Form.Item>
        <Form.Item
          initialValue={user?.last_name}
          name="last_name"
          label={t("main.lastName")}
          className="max-[767px]:!m-0"
        >
          <Input
            disabled={!isChange}
            name="last_name"
            className="w-full h-[50px]"
          />
        </Form.Item>
        <Form.Item
          initialValue={user?.email}
          name="email"
          label={t("main.email")}
          className="max-[767px]:!m-0"
          rules={[
            {
              required: true,
              message: t("errors.email"),
            },
          ]}
        >
          <Input
            disabled={!isChange}
            name="email"
            className="w-full h-[50px]"
          />
        </Form.Item>
        <Form.Item
          initialValue={user?.phone}
          name="phone"
          label={t("main.phone")}
          className="max-[767px]:!m-0"
        >
          <PhoneInput
            disabled={!isChange}
            onlyCountries={["kg", "ru"]}
            inputClass="!w-full !h-[50px] rounded-[8px] disabled:!bg-black/5 disabled:!text-black/25"
            inputProps={{
              name: "phone",

              disabled: !isChange,
            }}
            country="kg"
          />
        </Form.Item>
      </div>
      {isChange && (
        <Button
          type="primary"
          htmlType="submit"
          className="!h-[40px] max-[767px]:mt-5 "
        >
          {t("profile.save")}
        </Button>
      )}
    </Form>
  );
};
