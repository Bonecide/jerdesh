import "./globals.css";
import { Provider } from "jotai";
import { ConfigProvider } from "antd";
import { theme } from "@/utils/theme/config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Footer } from "@/features/Footer";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { Metadata } from "next";
import { Providers } from "@/features/ProgressBarProvider";
const Header = dynamic(
  () => import("@/features/Header").then((mod) => mod.Header),
  {
    ssr: false,
    loading: () => (
      <div
        className="containerBlock "
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        <Skeleton count={2} width={"100%"} />
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Jerdesh",
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

              <main className="min-h-[550px]">
                <Providers>{children}</Providers>
              </main>
              <Footer />
            </body>
          </AntdRegistry>
        </ConfigProvider>
      </Provider>
    </html>
  );
}
