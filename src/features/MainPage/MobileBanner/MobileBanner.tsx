"use client";
import { bannersAtom } from "@/atoms/banners/banners.atoms";
import Banner from "@/components/Banner/Banner";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";

export default function MobileBanner() {
  const banners = useAtomValue(bannersAtom);
  if (!banners) return null;
  return (
    <div className="pt-6 max-w-[100vw] md:hidden">
      <Banner
        options={{
          slidesToShow: banners.main_right.length > 1 ? 1.1 : 1,
          infinite: banners.main_right.length > 1 ? true : false,
          dots: true,
        }}
      >
        {banners.main_right.map((item) => (
          <div key={item.id} className="px-2  outline-none">
            <Link target="_blank" href={item.link || ""}>
              <Image
                src={BASE_IMAGE_URL + item.image}
                alt="banner"
                width={100}
                height={100}
                className="!w-full rounded-[20px]"
              />
            </Link>
          </div>
        ))}
      </Banner>
    </div>
  );
}
