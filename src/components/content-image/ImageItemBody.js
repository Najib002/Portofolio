import React from "react";

function ImageItemBody({ image, title }) {
  return (
    <div className="max-w-3xl h-full bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="px-6 w-full h-full flex flex-row xl:grid xl:grid-rows-2 items-center xl:justify-center">
        <a href={title} className="flex justify-center">
          <img
            className="w-36 h-auto rounded-full py-2 px-8"
            src={image}
            alt={title}
          />
        </a>
        <a href={title} className="flex justify-center">
          <h6 className="text-lg text-center font-bold text-black">
            {title}
          </h6>
        </a>
      </div>
    </div>
  );
}

export default ImageItemBody;
