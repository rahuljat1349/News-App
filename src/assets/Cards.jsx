import React, { Component } from "react";

let url =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4c4b5c915e974be7a10d887a0b25e6d6";

export default function Cards() {
  const getData = async () => {
    let data = await fetch(url);
    let finalRes = await data.json();
    console.log(finalRes);
  };
  getData();
  return (
    <>
      <div className="flex w-[100%] justify-evenly flex-wrap items-center">
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
        <div className="flex text-wrap bg-slate-800 rounded-lg md:w-96 flex-col w- m-4 px-6 py-3">
          <div className=" overflow-hidden">
            <img
              className=""
              src="http://tinyurl.com/yzdu9ww5"
              alt="Error loading image"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">News Heading</h3>
          <p>News Description and this a random news about anything</p>
          <button href="#" className="bg-slate-900 py-2 my-2 rounded-md hover:bg-slate-950">Read More</button>
        </div>
      </div>
    </>
  );
}
