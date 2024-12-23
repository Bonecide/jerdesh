import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  description:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси.",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({ children }: Props) {
  return children;
}
