import { Home } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "lucide-react";

const Edit = () => {
  return (
    <div className="bg-zinc-900 h-full">
      <Topbar />
      <EditingSection />
    </div>
  );
};

export default Edit;

const Topbar = () => {
  return (
    <div className="flex items-center justify-between text-white p-4 ">
      <NavLink className="flex items-center gap-1" to="/profile">
        <p className="text-blue-500">&#x3c; profile</p>
      </NavLink>
      <p>Edit Profile</p>
      <NavLink className="flex items-center gap-1" to="/">
        <Home size={12} /> Home
      </NavLink>
    </div>
  );
};

const EditingSection = () => {
  return (
    <div className="mt-20 text-gray-100">
      <form className="flex flex-col justify-center items-center px-5">
        <div className="ring-2 p-[2px] ring-zinc-700 rounded-full">
          <img src="DummyStoryImage3.png" className="w-20 rounded-full" />
        </div>
        <input type="file" name="file" id="file" className="inputfile" />
        <label htmlFor="file" className="text-blue-500 mt-2 mb-10">
          Edit Picture
        </label>
        <h1 className="flex self-start font-semibold text-lg">
          Edit Account Details
        </h1>
        <div className="bg-zinc-600 my-1 w-full h-px"></div>
        <div className="flex flex-col w-full gap-2 mt-1">
          <input
            type="text"
            placeholder="username"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full"
          />
          <textarea
            type="text"
            placeholder="Bio..."
            className="input input-bordered w-full h-16 pt-2"
          />
          <button className="btn w-full text-white bg-blue-500">
            Update Details
          </button>
        </div>
      </form>
    </div>
  );
};
