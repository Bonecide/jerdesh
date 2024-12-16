"use client";
import { bannersAtom } from "@/atoms/banners/banners.atoms";
import Banner from "@/components/Banner/Banner";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useAtomValue } from "jotai";
import Image from "next/image";

export default function MobileBanner() {
  const banners = useAtomValue(bannersAtom);
  if (!banners) return null;
  return (
    <div className="pt-6 max-w-[100vw] md:hidden">
      <Banner options={{ slidesToShow: 1.1, dots: true }}>
        {banners.main_right.map((item) => (
          <div key={item.id} className="px-2 ml-6 outline-none">
            <Image
              src={BASE_IMAGE_URL + item.image}
              alt="banner"
              width={100}
              height={100}
              className="!w-full rounded-[20px]"
            />
          </div>
        ))}
      </Banner>
    </div>
  );
}
