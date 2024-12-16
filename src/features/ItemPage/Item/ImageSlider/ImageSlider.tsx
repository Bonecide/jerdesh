"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { BASE_IMAGE_URL } from "@/utils/const/env";

export const ImageSlider = ({
  images,
}: {
  images: {
    id: number;
    path: string;
  }[];
}) => {
  const settings: Settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    customPaging: (i) => (
      <div className="w-[10px] h-[10px] mt-[10px] rounded-full bg-[#D2D2D2] dots" />
    ),
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="lg:min-w-[550px] lg:w-[550px] max-h-[400px] md:pr-0 md:w-[400px] rounded-[12px]  bg-gray-200 w-full">
      <Slider {...settings}>
        {images.map((item) => (
          <Image
            className="lg:w-[550px] md:w-[400px] h-auto  max-h-[400px] object-contain rounded-[12px] w-full"
            src={item.path ? BASE_IMAGE_URL + item.path : ""}
            width={550}
            height={275}
            alt="image"
            key={item.id}
          />
        ))}
      </Slider>
    </div>
  );
};
