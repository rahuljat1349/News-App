import React, { Component } from "react";
import Navbar from "./Navbar";
import NewsContainer from "./NewsContainer";
document.body.style.backgroundColor = "#151515";
document.body.style.color = "white";

export default function App() {
  return (
    <>
      <Navbar />

      <NewsContainer />
    </>
  );
}
