import { ReactNode, useLayoutEffect } from "react";
import { Root } from "./Root";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "root.metadata.profile",
  });

  return {
    title: t("title"),
  };
}
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Root />
      {children}
    </>
  );
};

export default Layout;
