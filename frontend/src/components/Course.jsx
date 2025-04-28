import React from "react";
import list from "../assets/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl mt-28 ">
          We're delighted to have you{" "}
          <span className="text-pink-500">here!</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 m-30">
          {list.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
        <Link to="/">
          <button className="bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-700 mt-6 duration-300 my-10">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Course;
