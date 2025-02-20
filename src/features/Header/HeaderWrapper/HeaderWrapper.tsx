"use client";

import { FullScreenLoader } from "@/components/FullScreenLoader";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const Header = dynamic(
  () => import("@/features/Header").then((mod) => mod.Header),
  {
    ssr: false,
    loading: () => <FullScreenLoader />,
  }
);

export const HeaderWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <FullScreenLoader />}</AnimatePresence>
      <Header />
    </>
  );
};
