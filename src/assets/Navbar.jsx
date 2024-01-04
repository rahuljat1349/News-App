import React, { Component, useState } from "react";
import Menu from "./Menu";
export default function Navbar() {
  const [display, setDiplay] = useState("hidden");

  let menuToggle = () => {
    if (display === "hidden") {
      setDiplay("");
    } else {
      setDiplay("hidden");
    }
  };

  return (
    <>
      <nav className="bg-slate-700 w-full h-14 items-center flex justify-between px-4 md:px-6">
        <div className="cursor-pointer md:text-2xl text-xl text-slate-300 font-bold">
          NewsApp
        </div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-6 cursor-pointer">Home</li>
          <li className="mx-6 cursor-pointer">About Us</li>
          <li className="mx-6 cursor-pointer">Contact Us</li>
        </ul>
        <div onClick={menuToggle} className="md:hidden text-4xl">
          &#8801;
        </div>
        <div className="cursor-pointer md:p-2 hidden md:block  bg-slate-500 p-1 rounded-lg font-semibold hover:bg-slate-900">
          Login/SignUp
        </div>
      </nav>
      <Menu dis={display} />
    </>
  );
}
