import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="flex-1">
      <div className="w-[70%] border border-gray-400 flex items-center lg:pr-5">
        <input
          type="search"
          className="flex-1 p-2 focus:outline-none placeholder:text-sm"
          placeholder="Search 19.1 Million products from 152 stores in UAE"
        />

        <IoSearchOutline size={20} />
      </div>
    </div>
  );
};

export default SearchInput;
