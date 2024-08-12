import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "jotai";
import { ConfigProvider } from "antd";
import { theme } from "@/utils/theme/config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";
import { Toaster } from "react-hot-toast";
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata: Metadata = {
  title: "Главная | Jerdesh",
  description: "Jerdesh",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <body>
              <Toaster />
              <Header />
              <main className="min-h-[550px]">{children}</main>
              <Footer />
            </body>
          </AntdRegistry>
        </ConfigProvider>
      </Provider>
    </html>
  );
}
