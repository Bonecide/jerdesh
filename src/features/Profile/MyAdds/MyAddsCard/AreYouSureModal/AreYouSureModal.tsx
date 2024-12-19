import { Modal } from "@/components/Modal";
import { deleteAnnounce } from "@/services/deleteAnnounce/deleteAnnounce";
import { Button } from "antd";
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

  const onCancel = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onConfirm = useCallback(async () => {
    setIsLoading(true);
    const toastId = toast.loading("Загрузка...");
    const status = await deleteAnnounce(id);
    setIsLoading(false);
    toast.dismiss(toastId);
    if (status) {
      setIsOpen(false);
    }
  }, [id, setIsOpen]);
  return (
    <Modal
      className="w-[500px] py-[53px] flex flex-col items-center gap-[20px]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <h4>Вы уверены, что хотите удалить объявление?</h4>

      <div className="flex gap-[20px]">
        <Button
          onClick={onConfirm}
          loading={isLoading}
          className="!h-[43px] !px-[50px] !bg-[#FF5E5E] !border-none"
          type="primary"
        >
          Подтвердить
        </Button>
        <Button
          loading={isLoading}
          onClick={onCancel}
          className="!h-[43px] !px-[50px] "
          type="primary"
        >
          Отменить
        </Button>
      </div>
    </Modal>
  );
};
