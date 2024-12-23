import { MainPage } from "@/features/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  description:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};
export default async function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
