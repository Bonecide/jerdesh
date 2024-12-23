import { Metadata } from "next";

export const metadata: Metadata = {
  title: "  Политика использования файлов cookie | Jerdeshkg.ru",
  description:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};

const Cookie = () => {
  return (
    <main className="containerBlock mx-auto px-4 py-8">
      <div className="bg-primary text-white py-4 px-4">
        <div className="mx-auto container ">
          <h1 className="md:text-2xl text-xl font-bold">
            {" "}
            Политика использования файлов cookie
          </h1>
        </div>
      </div>
      <section className="mb-8 mt-4 container mx-auto">
        <p>
          Наш сайт использует файлы cookie и похожие технологии, чтобы
          гарантировать максимальное удобство пользователям, предоставляя
          персонализированную информацию, запоминая предпочтения в области
          маркетинга и продукции, а также помогая получить правильную
          информацию. При использовании данного сайта, вы подтверждаете свое
          согласие на использование файлов cookie в соответствии с настоящим
          уведомлением в отношении данного типа файлов. Если вы не согласны с
          тем, чтобы мы использовали данный тип файлов, то вы должны
          соответствующим образом установить настройки вашего браузера или не
          использовать данный сайт.
        </p>
      </section>
    </main>
  );
};

export default Cookie;
