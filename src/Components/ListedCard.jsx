import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListedCard = ({ name, location, price, main_image_url: icon }) => {
  const [like, setLike] = useState(false);
  const formattedPrice = parseFloat(price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="w-[290px] sm:w-full bg-white rounded-xl  shadow-custom">
      <Link to={`/detail/${name}`}>
        <div className="relative">
          <img
            src={icon}
            alt=""
            className="w-full h-[180px] rounded-t-xl relative"
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
        <div className="w-[90%] mx-auto py-3">
          <div className="w-full flex items-start flex-col">
            <h4 className="font-semibold text-base md:text-lg">
              ${formattedPrice}
            </h4>
            <p className="text-sm font-semibold my-2 text-[#85818E]">
              {location}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListedCard;
