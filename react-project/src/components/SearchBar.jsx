import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
const Searchbar = (props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-cyan-700 via-white to-white">
      <div className="flex flex-col overflow-hidden p-4 sm:py-2">
        <button
          className="text-lg md:w-fit text-white border-4 rounded p-1 m-2"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <div className="rounded-2xl bg-white px-6 pt-2 pb-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10 ">
          <div className=" mx-auto max-w-md">
            <form
              onSubmit={(e) => props.submitHandler(e)}
              className="relative mx-auto w-max border-sky-900"
            >
              <input
                onChange={(e) => props.searchItems(e.target.value)}
                type="search"
                className="peer cursor-pointer relative z-10 h-16 w-16 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text  focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute ml-2 inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-300 peer-focus:stroke-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </div>
        {props.apiData.length === 0 ? (
          <div className="mt-[380px] grid place-items-center text-4xl font-bold text-gray-400">
            <i>No Results Found Yet!</i>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-3">
            {props.apiData.map(({ document }) => {
              return <Card key={document.line_id} object={document} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
