import { Button, Checkbox, Form, Input } from "antd";
import { Dispatch, useCallback, useState } from "react";
import { CurrentType } from "../AuthModal";
import toast from "react-hot-toast";

import { register } from "@/services/register";

interface RegisterProps {
  setType: Dispatch<CurrentType>;
}
interface FormValues {
  email: string;
  password: string;
  password_confirmation: string;
}
export const Register = ({ setType }: RegisterProps) => {
  const [isAgree, setIsAgree] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async (values: FormValues) => {
      setIsLoading(true);
      const success = await register(values);
      setIsLoading(false);
      if (success) {
        toast.success(
          "Вы успешно зарегестрировались, пожалуйста войдите в аккаунт!"
        );
        setType("auth");
      }
    },
    [setType]
  );
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <h3 className="text-[25px] font-[500]">Регистрация</h3>

      <div className="mt-[32px] space-y-[20px]">
        <Form.Item
          name="email"
          label="Электронная почта"
          rules={[
            {
              required: true,
              type: "email",
              message: "Введите корректную почту",
            },
          ]}
        >
          <Input type="email" className="w-full h-[50px]" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            { required: true, message: "Введите пароль" },
            { min: 8, message: "Минимальная длина пароля 8 символов" },
          ]}
        >
          <Input.Password type="password" className="w-full h-[50px]" />
        </Form.Item>
        <Form.Item
          dependencies={["password"]}
          name="password_confirmation"
          label="Пароль"
          rules={[
            { required: true, message: "Повторите пароль" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли должны совпадать!"));
              },
            }),
          ]}
        >
          <Input.Password type="password" className="w-full h-[50px]" />
        </Form.Item>
        <div className="flex items-center gap-[5px]">
          <Checkbox onChange={(e) => setIsAgree(e.target.checked)} />
          <p className="text-[12px]">
            Я согласен с политикой конфиденциальности и условиями
          </p>
        </div>
        <Form.Item>
          <Button
            loading={isLoading}
            disabled={!isAgree}
            type="primary"
            htmlType="submit"
            className="w-full !h-[50px] text-[16px] disabled:bg-gray-400"
          >
            Зарегистрироваться
          </Button>
        </Form.Item>
      </div>
      <p className="text-center mt-[20px] text-[16px] text-[#B0B0B0]">
        Есть аккаунт?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setType("auth")}
        >
          Войти
        </span>
      </p>
    </Form>
  );
};
