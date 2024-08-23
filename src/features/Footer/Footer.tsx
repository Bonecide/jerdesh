import { navigation, PAYMENTS } from "@/utils/navigation";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="containerBlock border-t  border-[#C7C7C7] !mt-[80px] py-[20px]">
      <nav className="justify-between flex-col md:flex-row flex items-center gap-[10px] md:gap-0 md:items-center">
        <Image width={140} height={47} src={"/miniLogo.svg"} alt="jerdesh" className="md:mr-[70px]" />
        <div className="flex flex-col md:flex-row justify-between w-full">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-[#2B2B2B] md:text-[12px] lg:text-[14px] "
            >
              {item.name}
            </Link>
          ))}
          <p className="text-[#2B2B2B] md:text-[12px] lg:text-[14px] ">
            © Jerdesh.ru.kg - Все права защищены
          </p>
        </div>
      </nav>
      <div className="justify-between flex flex-wrap gap-[20px] items-center mt-[20px]">
        {PAYMENTS.map((item) => (
          <Image key={item} width={120} height={40} src={item} alt={item} />
        ))}
      </div>
    </footer>
  );
};
