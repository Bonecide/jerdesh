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
    <Form onFinish={onFinish} layout="vertical" className="flex flex-col ">
      <div className="grid grid-cols-2 gap-[40px]">
        <Form.Item initialValue={user.first_name} name="first_name" label="Имя">
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
        >
          <Input
            disabled={!isChange}
            name="email"
            className="w-full h-[50px]"
          />
        </Form.Item>
        <Form.Item initialValue={user.phone} name="phone" label="Телефон">
          <Input
            disabled={!isChange}
            name="phone"
            className="w-full h-[50px]"
          />
        </Form.Item>
      </div>
      {isChange && (
        <Button type="primary" htmlType="submit" className="!h-[40px]">
          Сохранить
        </Button>
      )}
    </Form>
  );
};
