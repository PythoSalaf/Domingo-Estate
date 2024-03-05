import React from "react";
import { google, login, logo } from "../Assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-start h-[100%]">
      <div className=" w-full h-[90vh] bg-white py-8 md:py-6">
        <div className="w-[90%] md:w-[80%] mx-auto ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px]" />
          </Link>
          <div className="w-full flex flex-col items-center justify-center mt-16">
            <h3 className="text-lg md:text-xl font-semibold">Login</h3>
            <p className="text-[#526360] text-base md:text-lg font-semibold mt-1">
              Login to your <span className="text-primary">Domingo</span>{" "}
              account
            </p>
            <form className="mt-4 w-[90%]">
              <div className="flex items-start flex-col w-full md:w-[80%]">
                <label className="mb-[6px] text-base md:text-lg font-medium">
                  Email Address
                </label>
                <input
                  type="text"
                  className="w-full border outline-none h-[36px] px-3 rounded-md bg-[#F5F5F5]"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="flex items-start flex-col w-full md:w-[80%] mt-5 ">
                <label className="mb-[6px] text-base md:text-lg font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border outline-none h-[36px] px-3 rounded-md bg-[#F5F5F5]"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <p className="text-primary mt-1">
                <Link>Forget Your password?</Link>
              </p>
              <button className="w-full md:w-[80%] bg-primary text-white py-[6px] text-sm md:text-base font-semibold  my-6 rounded-3xl">
                Login
              </button>
              <button className="w-full md:w-[80%] bg-white text-primary flex items-center gap-2 justify-center border-primary border py-[6px] rounded-3xl text-sm md:text-base font-semibold">
                Login with gmail
                <img src={google} alt="" className="w-[15px] md:w-[20px]" />
              </button>
              <p className="text-[#7B7B7B] mt-1">
                Dont have an account?{" "}
                <span className="text-primary">
                  <Link>Sign up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className=" w-full hidden md:block h-[100vh] ">
        <img src={login} alt="login" className="w-fit h-[100%]" />
      </div>
    </div>
  );
};

export default Login;
