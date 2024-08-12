import { Metadata } from "next";
import { ReactNode, useLayoutEffect } from "react";
import { Root } from "./Root";

export const metadata: Metadata = {
  title: "Профиль | Jerdesh",
  description: "Jerdesh",
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Root />
      {children}
    </>
  );
};

export default Layout;
