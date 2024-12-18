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

export const metadata: Metadata = {
  title: "Jerdesh",
  description: "Jerdesh",
  icons: {
    icon: "/fav.png",
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
