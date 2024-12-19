import { Button, Checkbox, Form, Input } from "antd";
import { Dispatch, useCallback, useState } from "react";
import { CurrentType } from "../AuthModal";
import { useSetAtom } from "jotai";
import { accesTokenAtom, isAuthAtom } from "@/atoms/authAtoms";
import { auth } from "@/services/auth";
import cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "nextjs-toploader/app";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
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
  const t = useTranslations("root");
  const locale = useLocale();

  const setAuth = useSetAtom(isAuthAtom);
  const setToken = useSetAtom(accesTokenAtom);

  const onSubmit = useCallback(
    async (values: FormValues) => {
      setIsLoading(true);
      const token = await auth(values);
      setIsLoading(false);
      if (token) {
        setToken(token);
        cookies.set("token", token, { expires: 7 });
        toast.success("Вы успешно вошли в аккаунт!");
        setAuth(true);
        setIsOpen(false);
        router.push(`/${locale}/profile?tab=profile`);
      }
    },
    [setAuth, setIsOpen, router, setToken, locale]
  );

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <h3 className="text-[25px] font-[500]">{t("auth.auth")}</h3>

      <div className="mt-[32px] space-y-[20px]">
        <Form.Item
          name="email"
          label={t("main.email")}
          rules={[
            {
              required: true,
              type: "email",
              message: t("errors.email"),
            },
          ]}
        >
          <Input name="email" type="email" className="w-full h-[50px]" />
        </Form.Item>
        <Form.Item
          name="password"
          label={t("main.password")}
          rules={[
            { required: true, message: t("errors.password.req") },
            { min: 8, message: t("errors.password.min") },
          ]}
        >
          <Input.Password type="password" className="w-full h-[50px]" />
        </Form.Item>
        <div className="flex items-center gap-[5px]">
          <Checkbox onChange={(e) => setIsAgree(e.target.checked)} />
          <Link
            locale={locale}
            href={"/confidential"}
            className="text-[12px] text-primary"
            target="_blank"
          >
            {t("auth.agree")}
          </Link>
        </div>
        <Form.Item>
          <Button
            loading={isLoading}
            disabled={!isAgree}
            htmlType="submit"
            type="primary"
            className="w-full !h-[50px] text-[16px] disabled:bg-gray-400"
          >
            {t("main.signIn")}
          </Button>
        </Form.Item>
      </div>
      <div className="flex justify-end mt-[20px] font-[500]">
        <p onClick={() => setType("forget")} className="cursor-pointer">
          {t("auth.forget")}
        </p>
      </div>
      <p className="text-center mt-[20px] text-[16px] text-[#B0B0B0]">
        {t("auth.dontHaveAccount")}{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setType("register")}
        >
          {t("auth.register")}
        </span>
      </p>
    </Form>
  );
};
