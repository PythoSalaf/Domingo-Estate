import React from "react";
import { about1, about3 } from "../Assets";

const SoldCard = () => {
  return (
    <div className="w-[270px]  bg-white rounded-xl py-2 shadow-custom">
      <div className="w-[95%] mx-auto">
        <div className="">
          <img
            src={about1}
            alt=""
            className="w-full h-[150px] md:h-[180px] rounded-xl "
          />
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <h4 className="font-semibold text-lg">Duplex</h4>
          <p className="text-base font-semibold text-primary">$100938</p>
        </div>
        <p className=" text-[12px] md:text-sm font-semibold my-2 text-[#526360]">
          “Thanks to Domingo I found my dream home effortlessly! The seamless
          interaction with agents streamlined the entire process”
        </p>
        <div className="flex items-center justify-center gap-4">
          <img src={about3} alt="" className="w-10 h-10 rounded-full" />
          <div className="flex items-center flex-col">
            <h4 className="text-base font-semibold">Ayesha Craig</h4>
            <p className="text-sm font-medium">Domingo customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldCard;
