import {
  Bookmark,
  Heart,
  MessageCircle,
  MessageCircleMore,
  Send,
} from "lucide-react";
import React from "react";

const Feed = () => {
  return (
    <div className="w-full h-full overflow-x-hidden  bg-black text-white">
      <TopBar />
      <Stories />
      <Posts />
    </div>
  );
};

export default Feed;

const TopBar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-4">
      <img src="logo.png" alt="" className="w-[20vw]  lg:w-[5vw]" />
      <div className="flex gap-4 -mt-1 ">
        <Heart size={20} />
        <MessageCircleMore size={20} />
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="flex px-4 p-1 gap-4 overflow-x-hidden">
      <img
        src="DummyStoryImage.png"
        className="w-14 rounded-full outline-none outline-amber-500"
      />
      <img
        src="DummyStoryImage2.png"
        className="w-14 rounded-full outline-none outline-amber-500"
      />
      <img
        src="DummyStoryImage3.png"
        className="w-14 rounded-full outline-none outline-amber-500"
      />
      <img
        src="DummyStoryImage.png"
        className="w-14 rounded-full outline-none outline-amber-500"
      />
      <img
        src="DummyStoryImage2.png"
        className="w-14 rounded-full outline-none outline-amber-500"
      />
      <img
        src="DummyStoryImage3.png"
        className="w-14 rounded-full outline-none outline-amber-500"
      />
    </div>
  );
};

const Posts = () => {
  return (
    <div className="pb-20 bg-black">
      <div className="mt-8 mx-5 flex items-center gap-2">
        <img src="avatar-person.svg" className="w-7" alt="" />
        <p className="text-gray-200">someusername</p>
        <p className="text-gray-500 text-xs">1d</p>
      </div>
      <div className="h-[45vh] mt-3 bg-yellow-100">
        <img src="" alt="post" />
      </div>
      <div className="flex gap-3 p-3">
        <Heart size={21} />
        <MessageCircle size={21} />
        <Send size={21} />
        <span className="flex justify-end w-full">
          <Bookmark size={20} />
        </span>
      </div>
      <div className="ml-3 -mt-1 text-gray-200">
        <p className="text-sm">23,332 likes</p>
        <p className="font-semibold ">someusername</p>
        <p className="text-gray-300 mt-[2px] text-xs -mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor
          reprehenderit fuga nemo quod, quia similique soluta optio quibusdam
          excepturi?
        </p>
      </div>
      {/* sas */}
      <div className="mt-11 mx-5 flex items-center gap-2">
        <img src="avatar-person.svg" className="w-7" alt="" />
        <p className="text-gray-200">someusername</p>
        <p className="text-gray-500 text-xs">1d</p>
      </div>
      <div className="h-[45vh] mt-3 bg-yellow-100">
        <img src="" alt="post" />
      </div>
      <div className="flex gap-3 p-3">
        <Heart size={21} />
        <MessageCircle size={21} />
        <Send size={21} />
        <span className="flex justify-end w-full">
          <Bookmark size={20} />
        </span>
      </div>
      <div className="ml-3 -mt-1 text-gray-200">
        <p className="text-sm">23,332 likes</p>
        <p className="font-semibold ">someusername</p>
        <p className="text-gray-300 mt-[2px] text-xs -mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor
          reprehenderit fuga nemo quod, quia similique soluta optio quibusdam
          excepturi?
        </p>
      </div>
      {/* s */}
      <div className="mt-11 mx-5 flex items-center gap-2">
        <img src="avatar-person.svg" className="w-7" alt="" />
        <p className="text-gray-200">someusername</p>
        <p className="text-gray-500 text-xs">1d</p>
      </div>
      <div className="h-[45vh] mt-3 bg-yellow-100">
        <img src="" alt="post" />
      </div>
      <div className="flex gap-3 p-3">
        <Heart size={21} />
        <MessageCircle size={21} />
        <Send size={21} />
        <span className="flex justify-end w-full">
          <Bookmark size={20} />
        </span>
      </div>
      <div className="ml-3 -mt-1 text-gray-200">
        <p className="text-sm">23,332 likes</p>
        <p className="font-semibold ">someusername</p>
        <p className="text-gray-300 mt-[2px] text-xs -mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor
          reprehenderit fuga nemo quod, quia similique soluta optio quibusdam
          excepturi?
        </p>
      </div>
    </div>
  );
};
