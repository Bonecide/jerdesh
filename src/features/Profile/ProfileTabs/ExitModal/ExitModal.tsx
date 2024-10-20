"use client";

import { accesTokenAtom, isAuthAtom } from "@/atoms/authAtoms";
import { Modal } from "@/components/Modal";
import { logout } from "@/services/logout";
import { Button } from "antd";
import { useSetAtom } from "jotai";
import { Dispatch, useCallback, useState } from "react";
import cookies from "js-cookie";

interface ExitModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  setIsTabOpen?: Dispatch<boolean>;
}
export const ExitModal = ({
  isOpen,
  setIsOpen,
  setIsTabOpen,
}: ExitModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const setIsAuth = useSetAtom(isAuthAtom);
  const setToken = useSetAtom(accesTokenAtom);
  const onCancel = useCallback(() => {
    setIsOpen(false);
    setIsTabOpen && setIsTabOpen(false);
  }, [setIsOpen, setIsTabOpen]);

  const onExit = useCallback(async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
    setToken("");
    cookies.remove("token");
    setIsTabOpen && setIsTabOpen(false);
    setIsAuth(false);
    setIsOpen(false);
  }, [setIsAuth, setIsOpen, setIsTabOpen, setToken]);

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
          loading={isLoading}
          onClick={onExit}
          className="!h-[43px] !px-[50px] !bg-[#FF5E5E] !border-none"
          type="primary"
        >
          Выйти
        </Button>
        <Button
          loading={isLoading}
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
