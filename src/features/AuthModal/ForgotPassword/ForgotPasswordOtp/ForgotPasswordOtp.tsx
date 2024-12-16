import { forgotPasswordConfirm } from "@/services/forgotPassword";
import { Button, Form, Input } from "antd";
import { Dispatch, useCallback, useState } from "react";
import { CurrentType } from "../../AuthModal";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("root");
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
      setIsLoading(false);
    },
    [email, setType]
  );
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <h3 className="text-[25px] font-[500]">{t("forgot.confirm")}</h3>

      <div className="mt-[32px] space-y-[20px]">
        <Form.Item
          name="code"
          label={t("forgot.confirmCode")}
          rules={[
            {
              required: true,
              message: t("errors.confirmCode.req"),
            },
            { min: 10, message: t("errors.confirmCode.min") },
            {
              max: 10,
              message: t("errors.confirmCode.max"),
            },
          ]}
        >
          <Input className="w-full h-[50px]" />
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
        <Form.Item
          dependencies={["password"]}
          name="password_confirmation"
          label={t("main.passwordConfirm")}
          rules={[
            { required: true, message: t("main.passwordConfirm") },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t("errors.passwordConfirm")));
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
            {t("forgot.changePassword")}
          </Button>
        </Form.Item>
        <Button
          onClick={() => setIsOtp(false)}
          loading={isLoading}
          type="primary"
          className="w-full !h-[50px] !bg-[#F0F0F0] !text-black text-[16px] disabled:bg-gray-400"
        >
          {t("forgot.back")}
        </Button>
      </div>
    </Form>
  );
};
