import React from "react";
import { CircleUserRound, Home, PlusSquare, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const links = [
    {
      icon: <Home />,
      link: "/",
    },
    {
      icon: <Search />,
      link: "/search",
    },
    {
      icon: <PlusSquare />,
      link: "/upload",
    },
  ];
  return (
    <div className="w-screen h-screen lg:ml-[40%] lg:w-[21vw] ">
      <Outlet />
      <div className="lg:w-[21vw] flex w-full bg-black fixed h-[6vh] bottom-0 justify-center items-center gap-[10%]">
        {links.map((val, index) => {
          return (
            <NavLink to={val.link} key={index}>
              <button className="btn btn-ghost">{val.icon}</button>
            </NavLink>
          );
        })}
        <NavLink to="/profile" className="btn btn-ghost">
          <img className="w-6" src="avatar-person.svg" />
        </NavLink>
      </div>
    </div>
  );
};

export default Layout;
