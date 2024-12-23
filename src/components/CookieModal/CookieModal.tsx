"use client";
import { Link } from "@/i18n/routing";
import { Button } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useCallback, useState } from "react";
import cookies from "js-cookie";

export const CookieModal = () => {
  const [isShow, setIsShow] = useState(!cookies.get("isConfirmCookie"));
  const locale = useLocale();

  const onConfirm = useCallback(() => {
    setIsShow(false);
    cookies.set("isConfirmCookie", "true", {
      expires: 999,
    });
  }, []);
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{
            opacity: 0,
            z: -100,
          }}
          exit={{
            z: -100,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            z: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="left-[15px] fixed bottom-[15px] p-[25px] rounded-[10px] bg-white w-[450px] max-w-full z-10 cookieShadow"
        >
          <p className="text-[14px]">
            Этот Сайт использует файлы cookies для более удобной работы
            пользователей с ним. Продолжая любое дальнейшее использование Сайта,
            Вы соглашаетесь с этим. Более подробная информация доступна в{" "}
            <Link locale={locale} href="/cookie" className="text-primary">
              Политики использования cookie
            </Link>
          </p>

          <Button
            onClick={onConfirm}
            type="primary"
            className="mt-[15px] !py-[20px] !px-[25px]"
          >
            Понятно
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
