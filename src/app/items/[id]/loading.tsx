import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="containerBlock">
      <div className="flex flex-col md:flex-row gap-[30px] items-start">
        <div className="w-full">
          <Skeleton count={2} width={"100%"} />
          <div className="flex flex-col mt-[20px] md:flex-row gap-[30px] items-start">
            <Skeleton count={1} height={300} width={600} borderRadius={24} />

            <Skeleton containerClassName="flex-1" width={"100%"} count={12} />
          </div>
          <div className="w-full py-[30px] px-[18px] rounded-[20px] mt-[20px] descriptionShadow">
            <p className="font-[500] text-[16px]">Описание</p>
            <Skeleton className="mt-[10px]" count={2} width={"100%"} />
          </div>

          <Skeleton
            borderRadius={24}
            height={127}
            width="100%"
            className="mt-[40px]"
          />
          <div className="mt-[30px] gap-[20px] md:flex lg:block">
            <div>
              <h2 className="font-[500] text-[20px] mt-[30px]">Рекомендации</h2>
              <div className="flex gap-[30px]">
                <Skeleton
                  width="100%"
                  height={239}
                  containerClassName="flex-1"
                />
                <Skeleton
                  width="100%"
                  height={239}
                  containerClassName="flex-1"
                />
                <Skeleton
                  width="100%"
                  height={239}
                  containerClassName="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
        <Skeleton width={300} height={900} />
      </div>
    </div>
  );
};

export default Loading;
