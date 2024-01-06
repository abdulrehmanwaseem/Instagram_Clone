import { Home } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "lucide-react";

const Upload = () => {
  return (
    <div className="bg-zinc-900 h-full">
      <Topbar />
      <UploadingSection />
    </div>
  );
};

export default Upload;

const Topbar = () => {
  return (
    <div className="flex items-center justify-between text-white p-4 ">
      <NavLink className="flex items-center gap-1" to="/profile">
        <p className="text-blue-500">&#x3c; profile</p>
      </NavLink>
      <p>Upload Post</p>
      <NavLink className="flex items-center gap-1" to="/">
        <Home size={12} /> Home
      </NavLink>
    </div>
  );
};

const UploadingSection = () => {
  return (
    <div className="mt-20 text-gray-100">
      <form className="flex flex-col justify-center items-center px-5">
        <div className="ring-2 ring-zinc-800 rounded-full p-8">
          <Image className="" size={36} />
        </div>
        <input type="file" name="file" id="file" className="inputfile" />
        <label htmlFor="file" className="text-blue-500 mt-2">
          Select Picture
        </label>
        <textarea
          type="text"
          placeholder="Write a caption..."
          className="input input-bordered w-full mt-8 h-20"
        />
        <button className="btn w-full mt-2 text-white bg-blue-500">Post</button>
      </form>
    </div>
  );
};
