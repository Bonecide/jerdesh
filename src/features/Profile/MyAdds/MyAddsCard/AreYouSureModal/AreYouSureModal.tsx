import { profileAnnouncementsAtom } from "@/atoms/profile";
import { Modal } from "@/components/Modal";
import { deleteAnnounce } from "@/services/deleteAnnounce/deleteAnnounce";
import { Button } from "antd";
import { useSetAtom } from "jotai";
import { useTranslations } from "next-intl";
import { Dispatch, useCallback, useState } from "react";
import toast from "react-hot-toast";

export const AreYouSureModal = ({
  id,
  isOpen,
  setIsOpen,
}: {
  id: number;
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const refetchAnnounce = useSetAtom(profileAnnouncementsAtom);
  const t = useTranslations('root')
  const onCancel = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onConfirm = useCallback(async () => {
    setIsLoading(true);
    const toastId = toast.loading(t('main.loading'));
    const status = await deleteAnnounce(id);

    setIsLoading(false);
    toast.dismiss(toastId);
    if (status) {
      refetchAnnounce();
      setIsOpen(false);
    }
  }, [id, refetchAnnounce, setIsOpen,t]);
  return (
    <Modal
      className="w-[500px] py-[53px] flex flex-col items-center gap-[20px]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <h4 className="text-center">
        Вы уверены, что хотите удалить объявление?
      </h4>

      <div className="flex gap-[20px] items-center flex-wrap">
        <Button
          onClick={onConfirm}
          loading={isLoading}
          className="!h-[43px] !px-[50px] !bg-[#FF5E5E] !border-none w-full md:w-auto"
          type="primary"
        >
          Подтвердить
        </Button>
        <Button
          loading={isLoading}
          onClick={onCancel}
          className="!h-[43px] !px-[50px] w-full md:w-auto "
          type="primary"
        >
          Отменить
        </Button>
      </div>
    </Modal>
  );
};
