"use client";

import { Announcement_Service } from "@/atoms/announcements";
import {
  announcementsServicesAtom,
  AnnounceServicesData,
  fetchAnnouncementsServicesAtom,
} from "@/atoms/announcements/announcementsServices.atoms";
import { fetchVipSevicesAtom, vipSevicesAtom } from "@/atoms/profile";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect } from "react";

const servicesTexts: Record<Announcement_Service, string> = {
  raise:
    "<b>Поднятие объявления вверх:</b> Переместите ваше объявление на первую позицию в списке",
  fix: "<b>Закрепление объявления:</b> Разместите объявление в верхней части списка на длительный срок",
  color:
    "<b>Выделение цветом:</b> Покрасьте объявление в розовый цвет, чтобы привлечь внимание клиентов",
  border:
    "<b>Обрамление рамкой:</b> Добавьте рамку вокруг объявления, чтобы сделать его более заметным. ",
};
export const Services = () => {
  const services = useAtomValue(announcementsServicesAtom);
  const fetchServices = useSetAtom(fetchAnnouncementsServicesAtom);
  const vips = useAtomValue(vipSevicesAtom);
  const fetchVips = useSetAtom(fetchVipSevicesAtom);

  useEffect(() => {
    fetchServices();
    fetchVips();
  }, [fetchServices, fetchVips]);

  const getText = useCallback((item: AnnounceServicesData) => {
    return "- " + servicesTexts[item.status.title] + `за ${item.price} Руб.`;
  }, []);
  return (
    <div className="space-y-[20px]">
      <section>
        <p>
          Наша платформа предлагает удобные инструменты для продвижения ваших
          объявлений, чтобы вы могли максимально эффективно достичь своей
          аудитории. Мы предоставляем два основных направления услуг: размещение
          рекламных баннеров и продвижение объявлений.
        </p>
      </section>
      <section>
        <b> ### 1. Размещение баннеров</b> <br /> Если вы хотите разместить
        рекламный баннер, свяжитесь с администратором для обсуждения условий.
        Это поможет вам привлечь внимание к вашему бренду или предложению.
      </section>

      <section>
        <b>### 2. Функционал для продвижения объявлений</b> <br /> В вашем
        личном кабинете вы найдете инструменты для продвижения, которые позволят
        вашим объявлениям выделяться:
        <br />
        {services.map((item) => (
          <p
            key={item.id}
            dangerouslySetInnerHTML={{ __html: getText(item) }}
          />
        ))}
      </section>

      <section>
        <b>### 3. Скидки и тарифы </b> <br /> Для постоянных пользователей
        доступны тарифные планы со скидками:
        <br />
        {vips.map((item) => (
          <p key={item.id}>
            {" "}
            <b>
              - Тариф {item.pricing_vip_services[0].price} рублей в месяц:
              Включает размещение до {item.ads_count} объявлений и скидку{" "}
              {item.discount}% на услуги продвижения.
            </b>
          </p>
        ))}
      </section>
      <section>
        <b>Пополнение баланса</b> <br />
        <p>
          Чтобы воспользоваться услугами продвижения, пополните баланс через
          личный кабинет.{" "}
        </p>
        <p className="mt-[20px]">
          Выберите подходящий вам инструмент и привлеките больше внимания к
          своим объявлениям!
        </p>
      </section>
    </div>
  );
};
