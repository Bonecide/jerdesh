import { categories } from "@/utils/mock";

export const Categories = () => {
  return (
    <div className="flex flex-col mt-[32px] gap-[5px] w-[20%] ">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex  items-center gap-[10px] cursor-pointer w-[210px]"
        >
          <div className="size-[10px] min-w-[10px] bg-primary rounded-full" />
          <p className="text-[#02203B] text-[14px]">
            {item.name} ({item.count})
          </p>
        </div>
      ))}
    </div>
  );
};
