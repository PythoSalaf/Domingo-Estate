import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineBed } from "react-icons/md";
import { VscArchive } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";

const FeaturedCard = ({ avater, name, price, location, flat, room }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[290px] sm:w-full bg-white rounded-xl py-2 shadow-custom">
      <div className="w-[95%] mx-auto">
        <div className="relative">
          <img
            src={avater}
            alt=""
            className="w-full h-[180px] rounded-xl relative"
          />
          <div
            className="absolute top-[10px] left-3 z-10 cursor-pointer "
            onClick={() => setLike(!like)}
          >
            {like ? (
              <FaHeart size={25} color="#000080" />
            ) : (
              <FaHeart size={25} color="#fff" />
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex items-center gap-1 mt-[10px]">
            <GrLocation size={18} />
            <p className="text-sm font-semibold">{location}</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <h4 className="text-primary font-semibold text-base">${price}</h4>
          <div className="flex items-center gap-2 mt-[10px]">
            <div className="flex items-center gap-1">
              <MdOutlineBed size={16} />
              <p className="text-sm font-semibold">{flat}</p>
            </div>
            <div className="flex items-center gap-1">
              <VscArchive size={14} />
              <p className="text-sm font-semibold">{room}</p>
            </div>
          </div>
        </div>
        <button className="w-full  bg-primary rounded-2xl mt-4 mb-2 py-[2px] text-white">
          View listing
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
