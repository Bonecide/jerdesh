"use client";

import { userAtom } from "@/atoms/user";
import { Button, Form, Input } from "antd";
import { useAtomValue } from "jotai";
import { Dispatch, useCallback } from "react";
import toast from "react-hot-toast";

interface ProfileForm {
  isChange: boolean;
  setIsChange: Dispatch<boolean>;
}

interface Data {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}
export const ProfileForm = ({ isChange, setIsChange }: ProfileForm) => {
  const user = useAtomValue(userAtom);

  const onFinish = useCallback(
    (data: Data) => {
      toast.success("Данные успешно обновлены!");
      setIsChange(false);
    },
    [setIsChange]
  );
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col max-[767px]:!mt-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[40px]">
        <Form.Item
          initialValue={user.first_name}
          name="first_name"
          label="Имя"
          className="max-[767px]:!m-0"
        >
          <Input
            disabled={!isChange}
            name="first_name"
            className="w-full h-[50px]"
          />
        </Form.Item>
        <Form.Item
          initialValue={user.last_name}
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
          initialValue={user.email}
          name="email"
          label="Электронная почта"
          className="max-[767px]:!m-0"
        >
          <Input
            disabled={!isChange}
            name="email"
            className="w-full h-[50px]"
          />
        </Form.Item>
        <Form.Item
          initialValue={user.phone}
          name="phone"
          label="Телефонv"
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
