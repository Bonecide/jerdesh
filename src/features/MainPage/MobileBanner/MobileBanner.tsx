import Banner from "@/components/Banner/Banner";
import Image from "next/image";

const imageUrls = ["mobileSecondBanner", "mockRightBanner"];

export default function MobileBanner() {
  return (
    <div className="pt-6 max-w-[100vw] md:hidden">
      <Banner options={{ slidesToShow: 1.1, dots: true }}>
        {imageUrls.map((url) => (
          <div key={url} className="px-2 ml-6 outline-none">
            <Image
              src={`/images/${url}.png`}
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
