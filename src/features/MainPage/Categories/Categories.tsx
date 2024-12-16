import { getAllCategories } from "@/services/category";
import Link from "next/link";
import { Category } from "./Category";

export const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <div className=" flex-col mt-[10px] gap-[5px] w-[20%] hidden lg:flex ">
      {categories?.map((item) => (
        <div
          key={item.id}
          className="flex  items-center gap-[10px] cursor-pointer w-[210px]"
        >
          <div className="size-[10px] min-w-[10px] bg-primary rounded-full" />
          <Category item={item} />
        </div>
      ))}
    </div>
  );
};
