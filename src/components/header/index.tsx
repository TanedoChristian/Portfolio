import React from "react";

const Header = (props: any) => {
  console.log(props);
  return (
    <div
      className={`flex   h-[8vh] overflow-hidden top-0 left-0 w-full z-50  ${
        props.color ? "border-b border-gray-200" : ""
      }   justify-between px-10 fixed items-center bg-neutral-800 `}
      style={{
        backgroundColor: props.color ? "" : "white",
        color: props.color ? "white" : "black",
        transition: "background-color 0.5s ease",
      }}
    >
      <h1 className="text-2xl font-bold"></h1>

      <ul
        className={`gap-10 font-medium tracking-wide hidden lg:flex cursor-pointer`}
      >
        <li
          className={` hover:border-b-2 ${
            props.color ? " border-white" : "border-black"
          }`}
        >
          About Me
        </li>
        <li
          className={` hover:border-b-2 ${
            props.color ? " border-white" : "border-black"
          }`}
        >
          Contact Me
        </li>
        <li
          className={` hover:border-b-2 ${
            props.color ? " border-white" : "border-black"
          }`}
        >
          Portfolio
        </li>
      </ul>
      <i className="fa-solid fa-bars block sm:hidden"></i>
    </div>
  );
};

export default Header;
