import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Jerdeshkg.ru",
  description: "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};
const Confidential = () => {
  return (
    <div className=" text-gray-800 containerBlock">
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="md:text-2xl text-xl font-bold">
            Политика конфиденциальности
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Введение</h2>
          <p>
            Мы заботимся о защите ваших персональных данных. Данная политика
            конфиденциальности описывает, как мы собираем, используем и защищаем
            информацию, которую вы предоставляете при использовании нашего
            сайта.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Сбор и использование данных
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Мы можем собирать ваши контактные данные, такие как имя и
              электронная почта, которые вы предоставляете при регистрации или
              заполнении формы.
            </li>
            <li>
              Информация о вашем взаимодействии с сайтом, включая IP-адрес и
              данные о посещённых страницах, может собираться автоматически.
            </li>
            <li>
              Собранная информация используется для предоставления услуг,
              улучшения качества сайта и связи с вами.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Защита данных
          </h2>
          <p>
            Мы принимаем все необходимые меры для защиты ваших данных от
            несанкционированного доступа, изменения или удаления. Доступ к
            информации ограничен только уполномоченным сотрудникам.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Передача данных третьим лицам
          </h2>
          <p>
            Мы не передаём ваши персональные данные третьим лицам без вашего
            согласия, за исключением случаев, предусмотренных законом.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Ваши права
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Вы имеете право на доступ, исправление или удаление своих данных.
            </li>
            <li>
              Вы можете отказаться от обработки данных в маркетинговых целях,
              связавшись с нами.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Confidential;
