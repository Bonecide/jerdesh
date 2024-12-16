"use client";

import { isAuthAtom } from "@/atoms/authAtoms";
import { useAtomValue } from "jotai";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export const Root = () => {
  const isAuth = useAtomValue(isAuthAtom);
  useLayoutEffect(() => {
    if (!isAuth) {
      redirect("/");
    }
  }, [isAuth]);
  return null;
};
