"use client";
import { Announcement_Service } from "@/atoms/announcements";
import { announcementsServicesAtom } from "@/atoms/announcements/announcementsServices.atoms";
import {
  fetchProfileAtom,
  profileAnnouncementsAtom,
  profileAtom,
} from "@/atoms/profile";
import { Modal } from "@/components/Modal";
import { activeService } from "@/services/activeService";
import { Button } from "antd";
import { useAtomValue, useSetAtom } from "jotai";
import { useTranslations } from "next-intl";
import { Dispatch, useCallback, useMemo, useState } from "react";

interface ActionModal {
  isOpen: boolean;
  type: Announcement_Service;
  id: number;
  setIsOpen: Dispatch<boolean>;
}
export const ActionModal = ({ isOpen, type, id, setIsOpen }: ActionModal) => {
  const t = useTranslations("root.profile.announce");
  const [isLoading, setIsLoading] = useState(false);
  const services = useAtomValue(announcementsServicesAtom);

  const refetchProfile = useSetAtom(fetchProfileAtom);
  const refetchAnnounce = useSetAtom(profileAnnouncementsAtom);
  const texts: Record<Announcement_Service, string> = useMemo(() => {
    return {
      border: t("confirmTexts.border"),
      color: t("confirmTexts.color"),
      fix: t("confirmTexts.fix"),
      raise: t("confirmTexts.raise"),
    };
  }, [t]);

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
      refetchProfile();
      refetchAnnounce();
    }
  }, [currentService, id, refetchAnnounce, refetchProfile, setIsOpen]);

  return (
    <Modal
      className="md:px-[70px] md:py-[40px] px-[20px] w-[550px] max-w-[90vw]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <h3 className="font-[500] text-[16px] text-center">{texts[type]}</h3>
      <p className="text-center mt-[30px]">
        {t("confirmTexts.sure", { amount: String(currentService?.price || 0) })}
      </p>
      <div className="flex gap-[20px] flex-wrap items-center justify-center mt-[50px]">
        <Button
          onClick={onSubmit}
          loading={isLoading}
          className="!h-[43px] w-full md:w-auto  !px-[50px] !bg-[#FF7E36] !border-none"
          type="primary"
        >
          {t("confirm")}
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          loading={isLoading}
          className="!h-[43px] w-full md:w-auto !px-[50px] !bg-[#BBBBBB] "
          type="primary"
        >
          {t("cancel")}
        </Button>
      </div>
    </Modal>
  );
};
