import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title: "Jerdesh",
  description: "Jerdesh",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({ children }: Props) {
  return children;
}
