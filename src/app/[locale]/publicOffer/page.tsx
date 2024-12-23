import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публичная оферта | Jerdeshkg.ru",
  description:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};

const PublicOffer = () => {
  return (
    <div className=" text-gray-800  containerBlock">
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Публичная оферта</h1>
        </div>
      </div>
      <section className="my-8">
        <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
        <p className="mb-4">
          В настоящей Публичной оферте содержатся условия заключения Договора
          информационно-консультативных услуг (далее по тексту - «Договор
          информационно-консультативных услуг» и/или «Оферта», «Договор»).
          Настоящей офертой признается предложение, адресованное одному или
          нескольким конкретным лицам, которое достаточно определенно и выражает
          намерение лица, сделавшего предложение, считать себя заключившим
          Договор с адресатом, которым будет принято предложение.
        </p>
        <p className="mb-4">
          Совершение указанных в настоящей Оферте действий является
          подтверждением согласия обеих Сторон заключить Договор
          информационно-консультативных услуг на условиях, в порядке и объеме,
          изложенных в настоящей Оферте.
        </p>
        <p className="mb-4">
          Нижеизложенный текст Публичной оферты является официальным публичным
          предложением Исполнителя, адресованный заинтересованному кругу лиц
          заключить Договор информационно-консультативных услуг в соответствии с
          положениями пункта 2 статьи 437 Гражданского кодекса РФ.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Предмет Договора</h2>
        <p className="mb-4">
          Исполнитель обязуется оказать Заказчику информационно-консультационные
          услуги, а Заказчик обязуется оплатить их в размере, порядке и сроки,
          установленные настоящим Договором.
        </p>
        <p className="mb-4">
          Наименование, количество, порядок и иные условия оказания Услуг
          определяются на основании сведений Исполнителя при оформлении заявки
          Заказчиком, либо устанавливаются на сайте Исполнителя в сети
          «Интернет»
          <a
            href="https://jerdeshkg.ru"
            className="text-blue-600 underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jerdeshkg.ru
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          3. Права и обязанности Сторон
        </h2>
        <p className="mb-4">
          <span className="font-semibold">Исполнитель обязан:</span>
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Проанализировать информацию, документы и иные материалы.</li>
          <li>Ответить на вопросы Заказчика.</li>
          <li>Описать потенциальные риски и дать прогноз развития ситуации.</li>
          <li>При необходимости составить проекты документов.</li>
        </ul>
        <p className="mb-4">
          <span className="font-semibold">Заказчик обязан:</span>
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Предоставить необходимую документацию и информацию.</li>
          <li>Своевременно произвести оплату.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          4. Цена и порядок расчетов
        </h2>
        <p className="mb-4">
          Стоимость, а также порядок оказания информационно-консультативных
          услуг определяется на основании сведений Исполнителя при оформлении
          заявки Заказчиком, либо устанавливаются на сайте Исполнителя в сети
          «Интернет»:
          <a
            href="https://jerdeshkg.ru"
            className="text-blue-600 underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jerdeshkg.ru
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          5. Надлежащее оказание услуг
        </h2>
        <p className="mb-4">
          Возврат денежных средств за неоказанные или некачественно оказанные
          услуги осуществляется в соответствии с требованиями закона РФ «О
          защите прав потребителей» и другими нормативными актами.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          6. Конфиденциальность и безопасность
        </h2>
        <p className="mb-4">
          Стороны обязуются сохранять конфиденциальность информации, полученной
          в ходе исполнения Договора, и соблюдать законодательство о
          персональных данных.
        </p>
      </section>

      <section className="mt-10 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Исполнитель: Атабаева Зилола | ИНН: 772305543859 | ОГРНИП:
          323774600823733 | Email: info@jerdeshkg.ru
        </p>
      </section>
    </div>
  );
};

export default PublicOffer;