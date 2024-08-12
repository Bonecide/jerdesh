"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
export const ImageSlider = ({ images }: { images: string[] }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    customPaging: (i) => (
      <div className="w-[10px] h-[10px] rounded-full bg-[#D2D2D2] dots" />
    ),
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="min-w-[550px] w-[550px]">
      <Slider {...settings}>
        {images.map((item) => (
          <Image
            className="w-[550px] h-auto rounded-[12px]"
            src={item}
            width={550}
            height={275}
            alt="image"
            key={item}
          />
        ))}
      </Slider>
    </div>
  );
};
