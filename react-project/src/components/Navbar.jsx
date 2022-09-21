import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center w-full h-auto px-4 text-white bg-cyan-900 fixed p-3">
        <div>
          <h1 className="text-4xl font-signature ml-2">Ws</h1>
        </div>
        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer capitalize font-medium text-white   hover:scale-105 duration-500">
            <Link to="/" className="md:hover:text-gray-600">
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-300">
            <Link to="/search" className="md:hover:text-gray-600">
              Search
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-300">
            <Link to="/plotly" className="md:hover:text-gray-600">
              More
            </Link>
          </li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
        >
          {nav ? (
            <FaTimes className="text-white" size={30} />
          ) : (
            <FaBars className="text-white" size={30} />
          )}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-800 to-gray-800 text-gray-500">
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                to="/"
                smooth
                duration={500}
                className="hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                to="/search"
                smooth="true"
                duration={500}
                className="hover:text-gray-600"
              >
                Search
              </Link>
            </li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                to="/plotly"
                smooth="true"
                duration={500}
                className="hover:text-gray-600"
              >
                More
              </Link>
            </li>
          </ul>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
