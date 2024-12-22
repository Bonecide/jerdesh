import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Реклама | Jerdesh",
  description: "Jerdesh",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};

const AdvertisementPage = () => {
  return (
    <main className="containerBlock mx-auto px-4 py-8">
      <div className="bg-primary text-white py-4 px-4">
        <div className="mx-auto container ">
          <h1 className="md:text-2xl text-xl font-bold">Реклама на сайте</h1>
        </div>
      </div>
      <section className="mb-8 mt-4 container mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Почему выбирают нас?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Широкая аудитория:</span> Наш сайт
            посещают тысячи пользователей ежедневно.
          </li>
          <li>
            <span className="font-semibold">Таргетированная реклама:</span>{" "}
            Реклама настраивается для вашей целевой аудитории.
          </li>
          <li>
            <span className="font-semibold">Доступные условия:</span> Рекламные
            пакеты подходят для любого бюджета.
          </li>
        </ul>
      </section>

      <section className="mb-8 container mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Форматы рекламы
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Баннеры:</span> Графические
            элементы, размещённые в ключевых точках сайта.
          </li>
          <li>
            <span className="font-semibold">Спонсорские публикации:</span>{" "}
            Интеграция вашего бренда в статьях.
          </li>
          <li>
            <span className="font-semibold">Продвижение объявлений:</span>{" "}
            Увеличение видимости ваших объявлений.
          </li>
        </ul>
      </section>

      <section className=" container mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Как начать?
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Выберите подходящий формат и тарифный план.</li>
          <li>
            Свяжитесь с нами через форму обратной связи или напишите на{" "}
            <a
              href="mailto:info@jerdeshkg.ru"
              className="text-blue-600 underline"
            >
              info@jerdeshkg.ru
            </a>
            .
          </li>
          <li>Настройте рекламную кампанию и начните продвижение.</li>
        </ol>
      </section>
    </main>
  );
};

export default AdvertisementPage;
