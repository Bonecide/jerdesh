"use client";

import { isAuthAtom } from "@/atoms/authAtoms";
import { Modal } from "@/components/Modal";
import { Button } from "antd";
import { useSetAtom } from "jotai";
import { Dispatch, useCallback } from "react";
import toast from "react-hot-toast";

interface ExitModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}
export const ExitModal = ({ isOpen, setIsOpen }: ExitModalProps) => {
  const setIsAuth = useSetAtom(isAuthAtom);

  const onCancel = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onExit = useCallback(() => {
    setIsAuth(false);
    setIsOpen(false);
    toast.success("Вы успешно вышли из аккаунта!");
  }, [setIsAuth, setIsOpen]);

  return (
    <Modal
      className="w-[500px] py-[53px] flex flex-col items-center gap-[20px]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <h5 className="font-[500] text-[16px]">
        Вы уверены, что хотите выйти из аккаунта?
      </h5>
      <p>Все несохраненные данные могут быть утеряны</p>
      <div className="flex gap-[20px]">
        <Button
          onClick={onExit}
          className="!h-[43px] !px-[50px] !bg-[#FF5E5E] !border-none"
          type="primary"
        >
          Выйти
        </Button>
        <Button
          onClick={onCancel}
          className="!h-[43px] !px-[50px] "
          type="primary"
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
};
