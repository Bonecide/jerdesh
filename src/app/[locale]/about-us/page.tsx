import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "О нас | Jerdeshkg.ru",
  description: "Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};
const AboutUsPage = () => {
  return (
    <div className=" text-gray-800  containerBlock">
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">О нас</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Кто мы?</h2>
          <p>
            Мы — команда, которая стремится сделать процесс подачи и поиска
            объявлений максимально простым, удобным и эффективным. Наша цель —
            объединить людей и помочь им находить то, что они ищут, быстро и без
            лишних усилий.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Наша миссия
          </h2>
          <p>
            Мы верим в то, что каждый должен иметь доступ к удобной платформе
            для размещения объявлений. Наша миссия — создать пространство, где
            пользователи могут безопасно и эффективно обмениваться услугами,
            товарами и информацией.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Наши ценности
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Простота:</span> Мы стремимся к
              тому, чтобы наш сервис был интуитивно понятным для всех.
            </li>
            <li>
              <span className="font-semibold">Надёжность:</span> Мы уделяем
              особое внимание безопасности и качеству услуг.
            </li>
            <li>
              <span className="font-semibold">Открытость:</span> Мы всегда
              готовы выслушать ваши предложения и замечания.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p>
            За годы работы мы заслужили доверие тысяч пользователей благодаря
            нашему профессионализму, современным технологиям и вниманию к
            деталям. Мы постоянно развиваемся, чтобы предлагать вам лучшее.
          </p>
        </section>
      </main>

    
    </div>
  );
};

export default AboutUsPage;
