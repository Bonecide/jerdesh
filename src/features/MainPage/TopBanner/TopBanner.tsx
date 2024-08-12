import Image from "next/image";

export const TopBanner = () => {
  return (
    <div className="w-full">
      <Image src="/images/banner-full.png" className="w-full" alt="banner" width={1800} height={136} />
    </div>
  );
};
