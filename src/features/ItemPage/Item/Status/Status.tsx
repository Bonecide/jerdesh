import { AnnounceDetails } from "@/atoms/announcements";

export const Status = ({ item }: { item: AnnounceDetails }) => {
  return (
    <p className="text-center text-primary lg:text-[20px] md:text-[15px]">
      {item.category.title} {item.subcategory && `/ ${item.subcategory.title}`}
    </p>
  );
};
