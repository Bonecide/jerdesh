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

export const TopBanner = () => {
  const options: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="w-full overflow-x-hidden overflow-y-visibl banners">
      <Slider {...options}>
        {BANNERS.map((item, idx) => (
          <React.Fragment key={idx}>
            <Image
              src={item}
              className="w-full !hidden md:!block"
              alt="banner"
              width={1800}
              height={136}
            />
            <Image
              src={"/images/topBannerMobile.png"}
              width={850}
              height={192}
              className="w-full block md:!hidden object-contain"
              alt="banner"
            />
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};
