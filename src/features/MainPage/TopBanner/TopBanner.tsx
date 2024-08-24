"use client";

import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const BANNERS = [
  "/images/banner-full.png",
  "/images/banner-full.png",
  "/images/banner-full.png",
];

interface TopBannerProps {
  children: React.ReactNode[];
  options?: Settings;
}

const slickOptions: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,

  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const Banner = ({
  children,
  options = slickOptions,
}: TopBannerProps) => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-visible banners">
      <Slider {...options}>{children}</Slider>
    </div>
  );
};
