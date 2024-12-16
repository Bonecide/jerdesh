"use client";
import { Announcement_Service } from "@/atoms/announcements";
import { announcementsServicesAtom } from "@/atoms/announcements/announcementsServices.atoms";
import { Modal } from "@/components/Modal";
import { activeService } from "@/services/activeService";
import { Button } from "antd";
import { useAtomValue } from "jotai";
import { Dispatch, useCallback, useMemo, useState } from "react";

interface ActionModal {
  isOpen: boolean;
  type: Announcement_Service;
  id: number;
  setIsOpen: Dispatch<boolean>;
}
export const ActionModal = ({ isOpen, type, id, setIsOpen }: ActionModal) => {
  const [isLoading, setIsLoading] = useState(false);
  const services = useAtomValue(announcementsServicesAtom);
  const texts: Record<Announcement_Service, string> = useMemo(() => {
    return {
      border: "Подтверждение выделения объявления рамкой",
      color: "Подтверждение выделения объявления цветом",
      fix: "Подтверждение закрепления объявления",
      raise: "Подтверждение поднятия объявления",
    };
  }, []);

  const currentService = useMemo(() => {
    return services.find((item) => item.status.title === type);
  }, [services, type]);

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const status = await activeService({
      announceId: id,
      serviceId: currentService!.id,
    });
    setIsLoading(false);

    if (status) {
      setIsOpen(false);
    }
  }, [currentService, id, setIsOpen]);

  return (
    <Modal
      className="md:px-[70px] md:py-[40px] px-[20px] w-[550px] max-w-[90vw]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <h3 className="font-[500] text-[16px] text-center">{texts[type]}</h3>
      <p className="text-center mt-[30px]">
        Вы уверены, что хотите продолжить ? С вашего баланса будет списано{" "}
        {currentService?.price} рублей.
      </p>
      <div className="flex gap-[20px] flex-wrap items-center justify-center mt-[50px]">
        <Button
          onClick={onSubmit}
          loading={isLoading}
          className="!h-[43px] w-full md:w-auto  !px-[50px] !bg-[#FF7E36] !border-none"
          type="primary"
        >
          Подтвердить
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          loading={isLoading}
          className="!h-[43px] w-full md:w-auto !px-[50px] !bg-[#BBBBBB] "
          type="primary"
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
};
