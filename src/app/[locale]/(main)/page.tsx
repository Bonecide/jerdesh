import { MainPage } from "@/features/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Jerdesh",
  description: "Jerdesh",
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
