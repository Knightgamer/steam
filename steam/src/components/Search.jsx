import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RiFilter2Line } from "react-icons/ri";
function Search() {
  return (
    <div>
      <form>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="small-input"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#1e1f2006] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <a
            href=""
            type="submit"
            className="text-[#c4c4c4] absolute right-2.5 bottom-2.5 bg-[#0f0f0f] hover:text-[#ffffff] flex items-center font-normal rounded-lg text-sm px-4 py-2 transition ease-in-out"
          >
            <i className="mr-1">
              <RiFilter2Line />
            </i>
            Filter
          </a>
        </div>
      </form>
    </div>
  );
}

export default Search;
