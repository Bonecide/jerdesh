import { MainPage } from "@/features/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Jerdeshkg.ru",
  description: "Jerdeshkg.ru",
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
