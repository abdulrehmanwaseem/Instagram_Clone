import { Menu, PlusSquare } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-zinc-900 h-full text-gray-200">
      <Topbar />
      <ProfileDetails />
      <Posts />
    </div>
  );
};

export default Profile;

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <p>aesthetic._.Rehman</p>
      <span className="flex gap-4 items-center">
        <NavLink to="/upload">
          <PlusSquare size={23} />
        </NavLink>
        <Menu />
      </span>
    </div>
  );
};

const ProfileDetails = () => {
  return (
    <div className="flex flex-col my-10 px-5">
      <div className="flex justify-between items-center">
        <img src="avatar-person.svg" className="w-20" alt="" />
        <div className="flex gap-4">
          <span className="flex flex-col items-center">
            <p>322</p>
            <p>Posts</p>
          </span>
          <span className="flex flex-col items-center">
            <p>322</p>
            <p>Followers</p>
          </span>
          <span className="flex flex-col items-center">
            <p>322</p>
            <p>Following</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="mt-3 font-semibold">Abdul Rehman Waseem</h1>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur.
        </p>
        <NavLink
          to="/edit-profile"
          className="btn btn-sm w-28 mt-1 text-gray-200 bg-zinc-800"
        >
          Edit Profile
        </NavLink>
      </div>
    </div>
  );
};

const Posts = () => {
  const imageArray = [
    ["Screenshot.png", "Screenshot.png", "Screenshot.png"],
    ["Screenshot.png", "Screenshot.png", "Screenshot.png"],
  ];
  return (
    <div className="flex overflow-x-hidden flex-col gap-[2px] ">
      {imageArray.map((image, index) => (
        <div className="flex lg:flex-col  gap-[2px]" key={index}>
          {image.map((src, subIndex) => (
            <img src={src} className="bg-yellow-200 w-[33vw]" key={subIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};
