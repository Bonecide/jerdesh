"use client";

import { FullScreenLoader } from "@/components/FullScreenLoader";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Header = dynamic(
  () => import("@/features/Header").then((mod) => mod.Header),
  {
    ssr: false,
  }
);

export const HeaderWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <FullScreenLoader />}</AnimatePresence>
      <Header />
    </>
  );
};
