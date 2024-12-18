"use client";
import { useRouter } from "@/i18n/routing";
import { Radio } from "antd";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

const LANGUAGES = [
  {
    id: 1,
    title: "ru",
    image: "/images/russia.svg",
    code: "ru",
  },
  {
    id: 2,
    title: "kg",
    image: "/images/kyrgyzstan.svg",
    code: "kg",
  },
];
export const Settings = () => {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("root.profile.settingsTab");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const locale = useLocale();
  const onChange = useCallback(
    (code: string) => {
      startTransition(() => {
        const segments = pathname.split("/").filter(Boolean);
        if (segments[0] === locale) {
          segments.shift();
        }
        router.push(
          {
            pathname: `/${segments.join("/")}`,
            query: {
              tab: params.get("tab"),
            },
          },
          { locale: code }
        );
      });
    },
    [pathname, locale, router, params]
  );
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <div>
        <h3 className="text-[22px] text-center md:text-start">{t("choose")}</h3>

        <div className="flex gap-[40px] items-center mt-[20px] flex-col md:flex-row">
          {LANGUAGES.map((item) => (
            <div
              className="p-[22px] rounded-[15px] flex items-center w-[250px] max-w-full gap-[3px] border  border-primary"
              key={item.id}
            >
              <Radio
                onChange={() => onChange(item.code)}
                disabled={isPending}
                name="language"
                value={item.code}
                checked={item.code === locale}
              />
              <p>{t(`${item.title}`)}</p>
              <Image
                className="ml-[5px]"
                src={item.image}
                width={81}
                height={53}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
