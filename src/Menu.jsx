import React from "react";

export default function Menu(props) {
  return (
    <>
      <div className={`md:hidden ${props.dis} bg-slate-700 w-full`}>
        <ul className=" flex-col items-center flex font-semibold">
          <li className="my-1 cursor-pointer">Home</li>
          <li className="my-1 cursor-pointer">About Us</li>
          <li className="my-1 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </>
  );
}
