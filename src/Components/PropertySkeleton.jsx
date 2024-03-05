import React from "react";
import Skeleton from "react-loading-skeleton";
const PropertySkeleton = () => {
  return (
    <div className="w-[250px] md:w-full mb-3 bg-white shadow-custom">
      <div className="w-full h-[150px] ">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="mt-[6px]">
        <Skeleton height={18} width={100} />
      </div>
      <div className="mt-1">
        <Skeleton height={24} />
      </div>
    </div>
  );
};

export default PropertySkeleton;
