import { Button, Form, Input } from "antd";
import { Dispatch, useCallback, useState } from "react";
import { CurrentType } from "../AuthModal";
import { ForgotPasswordOtp } from "./ForgotPasswordOtp";
import { forgotPassword } from "@/services/forgotPassword";
import { useTranslations } from "next-intl";

interface ForgotPasswordProps {
  setType: Dispatch<CurrentType>;
}
export const ForgotPassword = ({ setType }: ForgotPasswordProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [email, setEmail] = useState("");

  const t = useTranslations("root");
  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const success = await forgotPassword(email);
    setIsLoading(false);
    if (success) {
      setIsOtp(true);
    }
  }, [email]);

  if (isOtp)
    return (
      <ForgotPasswordOtp setType={setType} email={email} setIsOtp={setIsOtp} />
    );
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <h3 className="text-[25px] font-[500]">{t("auth.forget")}</h3>

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
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="w-full h-[50px]"
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            className="w-full !h-[50px] text-[16px] disabled:bg-gray-400"
          >
            {t("forgot.next")}
          </Button>
        </Form.Item>
        <Button
          onClick={() => setType("auth")}
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
