import React from "react";

const SearchTask = () => {
  return (
    <>
      {/* Search Task */}
      <div className="task-search">
        <form className="flex items-center justify-end">
          <div className="relative overflow-hidden rounded-[50px] text-gray-50 w-[400px]">
            <input type="search" id="search-dropdown" className="z-20 block w-full bg-gray-800 px-4 py-2 pr-13 focus:outline-none" placeholder="Search Task" required />
            <button type="submit" className="absolute top-0 right-2 h-full text-white md:right-4">
              <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchTask;
