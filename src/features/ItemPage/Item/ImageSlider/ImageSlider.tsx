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
    <div className="lg:min-w-[550px] lg:w-[550px] md:pr-0 md:w-[400px] w-full">
      <Slider {...settings}>
        {images.map((item) => (
          <Image
            className="lg:w-[550px] md:w-[400px] h-auto rounded-[12px] w-full"
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
