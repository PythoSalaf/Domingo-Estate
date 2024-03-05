import React, { useState } from "react";
import { google, house, tick } from "../Assets";
import { FaArrowsAlt, FaLocationArrow, FaToilet } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useDetailQuery } from "../Features/EstateSlice";

const Details = ({ id, location }) => {
  const [showInterest, setShowInterest] = useState(false);
  const { name } = useParams();
  const { data } = useDetailQuery(name);
  console.log("DETAILS DATA", data?.data);
  const formattedPrice = parseFloat(data?.data?.price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="w-full mt-[5rem] mb-[2rem] ">
      <div className="w-[95%] md:w-[92%] mx-auto">
        <div className="w-[100%] mx-auto mt-2">
          <img
            src={data?.data?.main_image_url}
            alt="about"
            className="w-[95%] md:w-[90%] mx-auto h-[250px] md:h-[360px] rounded-lg"
          />
          <div className="w-[95%] md:w-[90%] mx-auto">
            <div className="flex items-center justify-between mt-2">
              <h4 className="font-semibold text-lg md:text-xl capitalize">
                {data?.data?.name}
              </h4>
              <h4 className="text-primary font-semibold text-lg md:text-xl">
                ${formattedPrice}
              </h4>
            </div>
            <div className="flex items-center flex-wrap gap-3 mt-4">
              <div className="flex items-center gap-1 bg-[#F3F3FF]  rounded-xl px-2 py-1 ">
                <FaLocationArrow color="#000080" size={16} />
                <p className="text-primary text-sm md:text-base">
                  {data?.data?.location}
                </p>
              </div>
              <div className="flex items-center gap-1 bg-[#F3F3FF]  rounded-xl px-2 py-1 ">
                <IoBedOutline color="#000080" size={16} />
                <p className="text-primary text-sm md:text-base">6 Bedrooms</p>
              </div>
              <div className="flex items-center gap-1 bg-[#F3F3FF] rounded-xl px-2 py-1">
                <FaToilet color="#000080" size={16} />
                <p className="text-primary text-sm md:text-base">6 Toilets</p>
              </div>
              <div className="flex items-center gap-1 bg-[#F3F3FF] rounded-xl px-2 py-1">
                <FaArrowsAlt color="#000080" size={16} />
                <p className="text-primary text-sm md:text-base">1800m²</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between mt-[2.5rem] ">
              <div className="w-full md:w-[67%] ">
                <h2 className="font-semibold mb-2 text-lg md:text-xl">
                  Description
                </h2>
                <p className=" text-sm md:text-base">
                  {data?.data?.description}
                </p>
                <hr className="bg-[#DBDBDB] mt-6 " />
                <div className="mt-4">
                  <h3 className="mb-4 font-semibold text-lg md:text-xl">
                    Features
                  </h3>

                  <div className="w-full">
                    {data?.data?.features.map((innerArray, outerIndex) => (
                      <div
                        key={outerIndex}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {innerArray.map((item, innerIndex) => (
                          <div
                            className="flex items-center gap-3"
                            key={innerIndex}
                          >
                            <BiSolidBadgeCheck color="#000080" size={25} />
                            <p className="font-semibold text-base capitalize">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="bg-[#DBDBDB] mt-6 mb-3" />
                <div className="mt-5">
                  <h2 className="mb-4 font-semibold text-lg md:text-xl">
                    Gallery
                  </h2>
                  <div className="w-full grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
                    {data?.data?.featured_images_url.map((imageUrl, index) => (
                      <div key={index} className="mb-4">
                        <img
                          src={imageUrl}
                          alt={`Icon ${index + 1}`}
                          className="w-[100%] h-[200px] md:h-auto rounded-lg mx-auto md:w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {!showInterest ? (
                <div className="w-full md:w-[30%] mt-8 md:mt-0 bg-white shadow-custom rounded-lg py-2">
                  <div className="w-[92%] mx-auto ">
                    <h3 className="font-semibold capitalize text-lg md:text-xl">
                      show interest
                    </h3>
                    <p className="mt-2 mb-5 text-sm text-[#7B7B7B] ">
                      Complete this form to indicate your interest in the
                      property and reserve an inspection spot
                    </p>
                    <form>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full outline-none border pl-2 rounded-lg h-[40px] mb-3 border-[#E9EDF7]"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full outline-none border pl-2 rounded-lg h-[40px] mb-3 border-[#E9EDF7]"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full outline-none border pl-2 rounded-lg h-[40px] mb-5 border-[#E9EDF7]"
                      />
                      <button
                        className="w-full bg-primary text-white py-[6px] text-sm md:text-base font-semibold  mb-5 rounded-3xl"
                        onClick={() => setShowInterest(true)}
                      >
                        Show interest
                      </button>
                      <button className="w-full bg-white text-primary flex items-center gap-2 justify-center border-primary border py-[6px] rounded-3xl text-sm md:text-base font-semibold">
                        Register with gmail
                        <img
                          src={google}
                          alt=""
                          className="w-[15px] md:w-[20px]"
                        />
                      </button>
                      <p className="text-center my-3">
                        Have an account?{" "}
                        <Link className="text-primary font-semibold">
                          Log in
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="w-full md:w-[30%] mt-8 md:mt-0  bg-[#f7f6ff] shadow-custom rounded-lg py-2">
                  <div className="w-[92%] mx-auto flex flex-col items-center  py-2 justify-center">
                    <img src={tick} alt="circle-tick" className="mb-5" />
                    <img src={house} alt="house" />
                  </div>
                  <p className="text-center">
                    You have indicated interest <br /> in this property
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
