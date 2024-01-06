import React from "react";

const Search = () => {
  return (
    <div className="bg-zinc-900 h-full p-4">
      <input
        type="text"
        placeholder="search username"
        className="input input-bordered w-full "
      />
      <div className="pt-4">
        <div className="flex pb-2 items-center">
          <img src="avatar-person.svg" className="w-10" alt="" />
          <span className="ml-2">
            <p className="text-white -mb-1">aesthetic_rehman</p>
            <p className="">abdul rehman waseem</p>
          </span>
        </div>
        <div className="flex pb-2 items-center">
          <img src="avatar-person.svg" className="w-10" alt="" />
          <span className="ml-2">
            <p className="text-white -mb-1">aesthetic_rehman</p>
            <p className="">abdul rehman waseem</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
