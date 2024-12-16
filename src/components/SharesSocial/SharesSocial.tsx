import {
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  VKShareButton,
  VKIcon,
} from "next-share";

export const ShareSocial = ({
  link,
  title = "",
  image,
}: {
  link: string;
  title: string;
  image?: string;
}) => {
  return (
    <div className="flex items-center gap-[10px] ml-[10px]">
      <TelegramShareButton url={link} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url={link} title={title} separator=": ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <VKShareButton url={link} image={image || ""}>
        <VKIcon size={32} round />
      </VKShareButton>
    </div>
  );
};
