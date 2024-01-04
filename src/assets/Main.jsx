import React, { Component } from "react";
import Cards from "./Cards";



export default function Main() {
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl mb-4">NewsApp - Top Headlines</h1>
      </div>
      <Cards />
    </div>
  );
}
