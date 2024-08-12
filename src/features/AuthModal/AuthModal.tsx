"use client";
import { Modal } from "@/components/Modal";
import { Button, Checkbox, Input } from "antd";
import { Dispatch, ReactElement, ReactNode, useState } from "react";
import { Auth } from "./Auth/Auth";
import { Register } from "./Register";

interface AuthModalProps {
  isAuth: boolean;
  setIsAuth: Dispatch<boolean>;
}

export type CurrentType = "auth" | "register" | "forget";
export const AuthModal = ({ isAuth, setIsAuth }: AuthModalProps) => {
  const [currentType, setCurrentType] = useState<CurrentType>("auth");

  const TYPES: Record<CurrentType, ReactNode> = {
    auth: <Auth setIsOpen={setIsAuth} setType={setCurrentType} />,
    forget: "",
    register: <Register setIsOpen={setIsAuth} setType={setCurrentType} />,
  };
  return (
    <Modal className="w-[500px]" isOpen={isAuth} setIsOpen={setIsAuth}>
      {TYPES[currentType]}
    </Modal>
  );
};
