import { Services } from "@/features/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | Jerdeshkg.ru",
  description:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};

const ServicesPage = () => {
  return (
    <div className="containerBlock text-gray-800 space-y-[20px]">
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="md:text-2xl text-xl font-bold">
            Услуги на платформе бесплатных объявлений
          </h1>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default ServicesPage;
