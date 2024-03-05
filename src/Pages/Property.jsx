import React, { useState } from "react";
import { ListedCard, Pagination, PropertySkeleton } from "../Components";
import { usePropertiesQuery } from "../Features/EstateSlice";

const Property = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = usePropertiesQuery(currentPage);
  const totalPage = data?.meta?.last_page;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  console.log("Data", data);
  return (
    <div className="w-full mt-[5rem]">
      <div className="w-[95%] md:w-[92%] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl mt-1 mb-5 capitalize font-semibold">
          Listed Property
        </h2>
        {isLoading ? (
          <div className="my-8 place-items-center md:place-items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8).keys()].map((index) => (
              <PropertySkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="my-8 place-items-center md:place-items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data?.data?.map((item) => (
              <ListedCard key={item.id} {...item} />
            ))}
          </div>
        )}
        <div className="w-full mt-2  mb-6 flex justify-center items-center  relative">
          <Pagination total={totalPage} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default Property;
