import { Button, Checkbox, Form, Input } from "antd";
import { Dispatch, useCallback, useState } from "react";
import { CurrentType } from "../AuthModal";
import { useSetAtom } from "jotai";
import { accesTokenAtom, isAuthAtom } from "@/atoms/authAtoms";
import { auth } from "@/services/auth";
import cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "nextjs-toploader/app";
interface AuthProps {
  setType: Dispatch<CurrentType>;
  setIsOpen: Dispatch<boolean>;
}

interface FormValues {
  email: string;
  password: string;
}
export const Auth = ({ setType, setIsOpen }: AuthProps) => {
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const setAuth = useSetAtom(isAuthAtom);
  const setToken = useSetAtom(accesTokenAtom);

  const onSubmit = useCallback(
    async (values: FormValues) => {
      setIsLoading(true);
      const token = await auth(values);
      setIsLoading(false);
      if (token) {
        setToken(token);
        cookies.set("token", token);
        toast.success("Вы успешно вошли в аккаунт!");
        setAuth(true);
        setIsOpen(false);
        router.push("/profile?tab=profile");
      }
    },
    [setAuth, setIsOpen, router, setToken]
  );

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <h3 className="text-[25px] font-[500]">Авторизация</h3>

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
          <Input name="email" type="email" className="w-full h-[50px]" />
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
            htmlType="submit"
            type="primary"
            className="w-full !h-[50px] text-[16px] disabled:bg-gray-400"
          >
            Войти
          </Button>
        </Form.Item>
      </div>
      <div className="flex justify-end mt-[20px] font-[500]">
        <p onClick={() => setType("forget")} className="cursor-pointer">
          Забыли пароль?
        </p>
      </div>
      <p className="text-center mt-[20px] text-[16px] text-[#B0B0B0]">
        Нет аккаунта?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setType("register")}
        >
          Зарегистрироваться
        </span>
      </p>
    </Form>
  );
};
