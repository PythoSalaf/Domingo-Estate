import React from "react";
import { footerlogo } from "../Assets";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full bg-[#00002B]  py-8">
      <div className="w-[95%] md:w-[92%] mx-auto">
        <div className="w-full mx-auto flex items-center flex-wrap">
          <div className="flex-grow mb-2">
            <img
              src={footerlogo}
              alt="footer-logo"
              className="w-[115px] md:w-[130px]"
            />
            <p className="text-white my-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              curabitur maximus quam.
            </p>
            <h4 className="text-white mt-2 mb-[6px] text-base">
              Subscribe to our Newsletter
            </h4>
            <div className="bg-white w-fit flex items-center justify-between  px-2 py-1 rounded-lg">
              <div className="flex items-center gap-2">
                <MdOutlineMail />
                <input
                  type="text"
                  placeholder="Email address"
                  className="border-none outline-none"
                />
              </div>
              <button className="bg-primary rounded-lg w-fit text-white px-2 py-[2px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex-grow text-white mb-4 ">
            <h3 className="">Properties</h3>
            <ul className="mt-2 ">
              <li>List your property</li>
              <li>All property</li>
              <li>Lorem, ipsum</li>
            </ul>
          </div>
          <div className="flex-grow text-white mb-4 ">
            <h3 className="">Properties</h3>
            <ul className="mt-2 ">
              <li>List your property</li>
              <li>All property</li>
              <li>Lorem, ipsum</li>
            </ul>
          </div>
          <div className="flex-grow text-white mb-4 ">
            <h3 className="">Properties</h3>
            <ul className="mt-2 ">
              <li>List your property</li>
              <li>All property</li>
              <li>Lorem, ipsum</li>
            </ul>
          </div>
        </div>
        <hr className=" bg[#CCCCE6] w-full mt-10 mb-5" />
        <div className="flex items-center justify-between">
          <p className="text-white text-sm md:text-base">
            Copyright ©Domingo.co
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="bg-white rounded-full  flex items-center justify-center w-8 h-8">
              <FaFacebook color="#000080" size={18} />
            </div>
            <div className="bg-white rounded-full  flex items-center justify-center w-8 h-8">
              <FaTwitter color="#000080" size={18} />
            </div>
            <div className="bg-white rounded-full  flex items-center justify-center w-8 h-8">
              <FaInstagramSquare color="#000080" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
