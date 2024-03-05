import React from "react";
import { frame, hero } from "../Assets";

import FeaturedCard from "../Components/FeaturedCard";
import { FeatureData } from "../Components/Dummy";
import SoldCard from "../Components/SoldCard";

const Home = () => {
  return (
    <div className="w-full mt-[4.3rem]">
      <div
        className="relative bg-custom-image h-[70vh] md:h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('${hero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full absolute inset-0 bg-[#010101] opacity-60">
          <div className=" w-[95%] md:w-[92%] mx-auto relative top-[15%] md:top-[35%] z-10 ">
            <h1 className=" text-white leading-[40px] md:leading-[55px] text-3xl  md:text-4xl font-bold mb-6 md:mb-[10px]">
              Find Your Perfect <br />
              Place To Call Home
            </h1>
            <p className=" text-white font-medium text-base md:text-lg">
              Discover the perfect blend of comfort and luxury with Domingo.
              Explore our curated selection <br />
              of exquisite properties tailored to match your lifestyle
              aspirations. From cozy suburban retreats <br />
              urban havens boasting breathtaking views, we have the key to your
              ideal abode.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] md:w-[92%] mx-auto my-7">
        <div className="w-full mx-auto flex-col   md:flex-row flex items-center justify-between">
          <div className="w-full md:w-[40%] flex flex-col   md:flex-row  items-center gap-3">
            <div className="w-[100%] flex items-start flex-col">
              <label className="mb-[6px] font-semibold text-base capitalize">
                Location
              </label>
              <input
                type=""
                className="w-full border rounded-md border-[#8F9695] outline-none h-[33px] px-2"
              />
            </div>
            <div className="w-[100%] flex items-start flex-col">
              <label className="mb-[6px] font-semibold text-base capitalize">
                property types
              </label>
              <input
                type=""
                className="w-full border rounded-md border-[#8F9695] outline-none h-[33px] px-2"
              />
            </div>
          </div>
          <div className="w-full md:w-[40%] flex-col   md:flex-row flex mx-auto items-center  gap-3">
            <div className="w-[98%] flex items-center mx-auto mt-2 md:mt-0   gap-3">
              <div className="w-[48%]  flex items-start flex-col">
                <label className="mb-[6px] capitalize font-semibold text-base">
                  bed
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md border-[#8F9695] outline-none h-[33px] px-2"
                />
              </div>
              <div className="w-[48%] flex  items-start flex-col">
                <label className="mb-[6px] capitalize font-semibold text-base">
                  toilet
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md border-[#8F9695] outline-none h-[33px] px-2"
                />
              </div>
            </div>
            <div className="w-[98%] flex items-start flex-col">
              <label className="mb-[6px] capitalize font-semibold text-base">
                price range
              </label>
              <input
                type="text"
                className="w-full border rounded-md border-[#8F9695] outline-none h-[33px] px-2"
              />
            </div>
          </div>
          <div className="w-[75%] md:w-[15%] ">
            <button className="bg-primary text-white rounded-3xl px-5 py-1 md:py-2 w-full mt-4 ">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-3 bg-[#fbfbfb]">
        <div className="w-[95%] md:w-[92%] mx-auto">
          <h3 className="my-3 capitalize font-bold text-2xl">Featured</h3>
          <div className="mt-8 place-items-center md:place-items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {FeatureData.map((item) => (
              <FeaturedCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mt-14 flex-col md:flex-row flex items-center justify-between gap-3">
            <div className="flex-1">
              <img
                src={frame}
                alt="frame"
                className="w-[95%] md:w-[90%] mx-auto md:mx-0"
              />
            </div>
            <div className="flex-1 flex flex-col items-start ">
              <h2 className="text-lg mb-4 md:text-2xl lg:text-3xl font-semibold">
                Why Domingo?
              </h2>
              <p className="mb-1 text-sm md:text-base">
                With an extensive network of seasoned professionals with
                in-depth knowledge of the real estate market. We leverage our
                expertise to guide you through every step of your property
                journey.
              </p>
              <p className="mb-1 text-sm md:text-base">
                {" "}
                We are committed to excellence in all aspects of our business.
                From the quality of our services to the professionalism of our
                team, we set high standards and continuously thrive to exceed
                expectations.{" "}
              </p>
              <p className="mb-1 text-sm md:text-base">
                With an extensive network of seasoned professionals with
                in-depth knowledge of the real estate market. We leverage our
                expertise to guide you through every step of your property
                journey.
              </p>
              <p className="mb-1 text-sm md:text-base">
                We are committed to excellence in all aspects of our business.
                From the quality of our services to the professionalism of our
                team, we set high standards and continuously thrive to exceed
                expectations.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="my-3 capitalize font-bold text-xl md:text-2xl">
              Recently sold properties
            </h3>
            <div className="mt-8 pb-8 place-items-center md:place-items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <SoldCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
