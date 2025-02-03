"use client";

import clsx from "@/utils/clsx/clsx";
import React from "react";
import Slider, { Settings } from "react-slick";

interface BannerProps {
  children: React.ReactNode[];
  className?: string;
  options?: Settings;
  props?: any;
}

const optionsSlider: Settings = {
  autoplay: false,
  arrows: false,
};

export default function Banner({
  children,
  className,
  options = { ...optionsSlider },
  ...props
}: BannerProps) {
  options = { ...optionsSlider, ...options };

  return (
    <Slider
      {...options}
      {...props}
      className={clsx("banner-slider", className)}
    >
      {children}
    </Slider>
  );
}
