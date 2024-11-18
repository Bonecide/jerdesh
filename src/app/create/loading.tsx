import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="containerBlock mt-[39px]">
      <Skeleton count={1} height={102} width={"100%"} borderRadius={9} />
      <div className="flex gap-[30px] items-start mt-[10px]">
        <Skeleton containerClassName="w-[20%]" height={32} count={17} />
        <Skeleton
          count={5}
          borderRadius={21}
          height={200}
          containerClassName="w-[60%] space-y-[15px]"
        />
        <Skeleton
          count={3}
          containerClassName="w-[20%] space-y-[15px]"
          width={250}
          height={250}
          borderRadius={15}
        />
      </div>
    </div>
  );
};

export default Loading;
