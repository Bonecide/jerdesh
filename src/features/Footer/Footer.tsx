import { navigation, PAYMENTS } from "@/utils/navigation";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container border-t  border-[#C7C7C7] !mt-[80px] py-[20px]">
      <nav className="justify-between flex items-center">
        <Image width={140} height={47} src={"/miniLogo.svg"} alt="jerdesh" />
        {navigation.map((item) => (
          <Link key={item.id} href={item.link} className="text-[#2B2B2B] ">
            {item.name}
          </Link>
        ))}
        <p className="text-[#2B2B2B] ">© Jerdesh.ru.kg - Все права защищены</p>
      </nav>
      <div className="justify-between flex items-center mt-[20px]">
        {PAYMENTS.map((item) => (
          <Image key={item} width={120} height={40} src={item} alt={item} />
        ))}
      </div>
    </footer>
  );
};
