import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ total, onChange }) => {
  return (
    <div>
      <ReactPaginate
        pageCount={total}
        onPageChange={onChange}
        pageRangeDisplayed={0}
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        containerClassName={"flex justify-center items-center space-x-2 mt-4"}
        nextLabel=">"
        previousLabel="<"
        activeClassName="bg-blue-600 text-white "
        pageClassName="flex items-center text-white cursor-pointer text-base py-[2px] px-3 justify-center rounded-full h-8 w-8 font-semibold bg-primary  px-2 "
        previousClassName=" px-2 bg-primary text-white flex item-center justify-center text-base md:text-lg py-[2px] font-medium rounded-full  h-8 w-8"
        nextClassName="  px-2 bg-primary text-white flex item-center justify-center text-base md:text-lg py-[2px] font-medium   rounded-full h-8 w-8"
      />
    </div>
  );
};

export default Pagination;
