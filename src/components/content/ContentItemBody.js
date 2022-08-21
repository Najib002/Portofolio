import React from "react";

function ContentItemBody({
  tag,
  title,
  rating,
  discount,
  originalPrice,
  price,
}) {
  return (
    <div className="max-w-sm mx-auto xl:mx-4 bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="/">
        <img className="rounded-t-lg" src="/images/image-content.jpeg" alt="Content" />
      </a>
      <div className="p-5 grid grid-rows-5 items-center">
        <p className=" text-xl font-bold text-gray-400">{tag}</p>
        <a href="/">
          <h5 className=" text-xl font-bold tracking-tight text-black">
            {title}
          </h5>
        </a>
        <p className=" text-md text-black font-bold">{rating}</p>
        <div className=" flex flex-row items-center">
            <span className="text-md font-bold text-red-600 bg-red-200 mr-3 p-1 rounded-lg">{discount}</span>
            <p className="line-through text-md font-bold text-gray-400">{originalPrice}</p>
        </div>
        <h4 className=" text-2xl font-bold tracking-tight text-black">
          {price}
        </h4>
      </div>
    </div>
  );
}

export default ContentItemBody;