import React from "react";
import William from "../assets/William.jpeg";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-200">
      <Navbar />
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mt-40 flex flex-col justify-center h-full ">
          <h1 className="text-4xl ml-0 md:text-5xl sm:text-4xl px-6 font-bold text-gray-600 font-signature">
            WILLIAM SHAKESPEARE
          </h1>
          <p className="text-cyan-800 py-4 md:w-[500px]">
            <cite>
              "All the world's a stage, and all the men and women merely
              players. They have their exits and their entrances; and one man in
              his time plays many parts."
            </cite>
          </p>

          <div>
            <Link
              to="/search"
              className="hidden group text-white w-fit px-6 py-3 my-2 md:flex items-center rounded-md bg-gradient-to-r from-cyan-500  bg-cyan-900 cursor-pointer"
            >
              Discover
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <img
          src={William}
          alt="myprofile"
          className="rounded-2xl mb-20 lg:mb-0 md:mb-0 mx-auto w-[380px] h-[350px] md:w-[440px] lg:w-[500px] lg:h-[380px]"
        />
      </div>
    </div>
  );
};

export default Main;
