import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="containerBlock mt-[39px]">
      <div className="flex gap-[30px] items-start mt-[10px]">
        <Skeleton
          containerClassName="w-[50%] space-y-[50px]"
          height={50}
          count={5}
        />
        <div className="flex-1 ">
          <Skeleton count={1} height={50} containerClassName="w-[50%] " />
          <Skeleton
            count={1}
            height={350}
            containerClassName="w-[50%] "
            className="mt-[50px]"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <Skeleton count={1} height={300} width={350} />
      </div>
    </div>
  );
};

export default Loading;
