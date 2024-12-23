import { Link } from "@/i18n/routing";
import { navigation, PAYMENTS } from "@/utils/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("root");
  return (
    <footer className="containerBlock border-t  border-[#C7C7C7] !mt-[80px] py-[20px]">
      <nav className="justify-between flex-col md:flex-row flex items-center gap-[10px] md:gap-0 md:items-center">
        <Image
          width={140}
          height={47}
          src={"/miniLogo.svg"}
          alt="jerdesh"
          className="md:mr-[70px]"
        />
        <div className="flex flex-col md:flex-row justify-between w-full">
          {navigation.map((item) => (
            <Link
              locale={locale}
              key={item.id}
              href={item.link}
              className="text-[#2B2B2B] md:text-[12px] lg:text-[14px] "
            >
              {t(`footer.${item.name}`)}
            </Link>
          ))}
        </div>
      </nav>
      <div className="justify-between flex flex-wrap gap-[20px] items-center mt-[20px]">
        {PAYMENTS.map((item) => (
          <Image key={item} width={120} height={40} src={item} alt={item} />
        ))}
      </div>
      <div className="mt-[10px] flex flex-wrap justify-between gap-y-[10px]">
        <p>
          email :{" "}
          <span>
            <a href="mailto:info@jerdeshkg.ru" className="text-primary">
              info@jerdeshkg.ru
            </a>
          </span>
        </p>
        <p>ИП Атабаева Зилола</p>
        <p> ИНН 772305543859</p>
      </div>
      <div className="flex justify-between w-full gap-[20px] mt-[10px] flex-wrap">
        <p className="text-center ">
          Разработка платформы{" "}
          <a
            href="https://syntlex.kg"
            target="_blank"
            className="text-primary "
          >
            Syntlex
          </a>
        </p>
        <p className="text-[#2B2B2B] md:text-[12px] lg:text-[14px] ">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="text-primary">
            Jerdeshkg.ru
          </Link>{" "}
          - {t("footer.secure")}
        </p>
      </div>
    </footer>
  );
};
