"use client";

import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useAtomValue } from "jotai";
import { bannersAtom } from "@/atoms/banners/banners.atoms";

export const TopBanner = () => {
  const banners = useAtomValue(bannersAtom);
  const options: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!banners) return null;
  return (
    <div className="w-full overflow-x-hidden overflow-y-visibl banners">
      <Slider {...options}>
        {banners.main_head.map((item, idx) => (
          <React.Fragment key={idx}>
            <Image
              src={BASE_IMAGE_URL + item.image}
              className="w-full !hidden md:!block"
              alt="banner"
              width={1800}
              height={136}
            />
            <Image
              src={BASE_IMAGE_URL + item.mobile_image}
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
