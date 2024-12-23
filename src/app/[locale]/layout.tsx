import "./globals.css";
import { Provider } from "jotai";
import { ConfigProvider } from "antd";
import { theme } from "@/utils/theme/config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Footer } from "@/features/Footer";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

import { Metadata } from "next";
import { Providers } from "@/features/ProgressBarProvider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { HeaderWrapper } from "@/features/Header/HeaderWrapper";
import { CookieModal } from "@/components/CookieModal";

export const metadata: Metadata = {
  title:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  description:
    "Жердеш - Жарыялар сайты! Доска объявлений! - Доска объявлений жердеш.kg, жердеш, jerdesh. акысыз жарыялар сайты, Квартира, койко место, авто, такси. | Jerdeshkg.ru",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en">
      <Provider>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <Providers>
              <NextIntlClientProvider messages={messages}>
                <body>
                  <CookieModal />
                  <Toaster />
                  <HeaderWrapper />

                  <main className="min-h-[70vh]">{children}</main>
                  <Footer />
                </body>
              </NextIntlClientProvider>
            </Providers>
          </AntdRegistry>
        </ConfigProvider>
      </Provider>
    </html>
  );
}
