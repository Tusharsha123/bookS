import React from "react";

const Cards = ({ item }) => {
  return (
    <div className=" my-3 flex p-3 container mx-auto">
      <div className="card bg-base-100 w-80  shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
