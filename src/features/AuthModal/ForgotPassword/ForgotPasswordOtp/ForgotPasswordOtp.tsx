import { forgotPasswordConfirm } from "@/services/forgotPassword";
import { Button, Form, Input } from "antd";
import { Dispatch, useCallback, useState } from "react";
import { CurrentType } from "../../AuthModal";

interface ForgotPasswordOtp {
  setIsOtp: Dispatch<boolean>;
  email: string;
  setType: Dispatch<CurrentType>;
}

interface FormValues {
  code: string;
  password: string;
  password_confirmation: string;
}
export const ForgotPasswordOtp = ({
  setIsOtp,
  email,
  setType,
}: ForgotPasswordOtp) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(
    async (data: FormValues) => {
      setIsLoading(true);

      const success = await forgotPasswordConfirm({
        ...data,
        email,
      });

      if (success) {
        setType("auth");
      }
    },
    [email, setType]
  );
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <h3 className="text-[25px] font-[500]">Регистрация</h3>

      <div className="mt-[32px] space-y-[20px]">
        <Form.Item
          name="code"
          label="Код подтверждения, отправленный на вашу почту"
          rules={[
            {
              required: true,
              message: "Введите код подтверждения, отправленный на вашу почту",
            },
            { min: 10, message: "Минимальная длина кода 10 символа" },
            {
              max: 10,
              message: "Максимальная длина кода 10 символа",
            },
          ]}
        >
          <Input className="w-full h-[50px]" />
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
          label="Повторите пароль"
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

        <Form.Item>
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="w-full !h-[50px] text-[16px] disabled:bg-gray-400"
          >
            Изменить пароль
          </Button>
        </Form.Item>
        <Button
          onClick={() => setIsOtp(false)}
          loading={isLoading}
          type="primary"
          className="w-full !h-[50px] !bg-[#F0F0F0] !text-black text-[16px] disabled:bg-gray-400"
        >
          Назад
        </Button>
      </div>
    </Form>
  );
};
