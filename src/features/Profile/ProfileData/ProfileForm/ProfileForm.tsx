"use client";

import { fetchProfileAtom, profileAtom } from "@/atoms/profile";
import { updateProfileData } from "@/services/profile/updateProfileData";
import { Button, Form, Input } from "antd";
import { useAtomValue, useSetAtom } from "jotai";
import { Dispatch, useCallback } from "react";
import toast from "react-hot-toast";

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
  const onFinish = useCallback(
    async (data: ProfileData) => {
      const toastId = toast.loading("Загрузка...");
      const status = await updateProfileData(data, user!.id);
      toast.dismiss(toastId);

      if (status) {
        setIsChange(false);
        await refetchUser();
      }
    },
    [refetchUser, setIsChange, user]
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
          label="Имя"
          className="max-[767px]:!m-0"
        >
          <Input disabled={!isChange} name="name" className="w-full h-[50px]" />
        </Form.Item>
        <Form.Item
          initialValue={user?.last_name}
          name="last_name"
          label="Фамилия"
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
          label="Электронная почта"
          className="max-[767px]:!m-0"
          rules={[
            {
              required: true,
              message: "Введите email",
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
          label="Телефон"
          className="max-[767px]:!m-0"
        >
          <Input
            disabled={!isChange}
            name="phone"
            className="w-full h-[50px]"
          />
        </Form.Item>
      </div>
      {isChange && (
        <Button
          type="primary"
          htmlType="submit"
          className="!h-[40px] max-[767px]:mt-5"
        >
          Сохранить
        </Button>
      )}
    </Form>
  );
};
