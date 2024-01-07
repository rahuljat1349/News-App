import React, { Component } from "react";
import MultiCard from "./Multicard";

export default function Main() {
  return (
    <div className="p-10 bg-black flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl mb-4">NewsApp - Top Headlines</h1>
      </div>
      <div className="w-[100%] flex flex-wrap justify-center">
        <MultiCard />
      </div>
    </div>
  );
}
