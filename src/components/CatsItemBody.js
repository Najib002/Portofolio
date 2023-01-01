import React, { useState } from "react";
import DetailsItemBody from "./DetailsItemBody";

function CatsItemBody({
  name,
  origin,
  description,
  wikipedia_url,
  temperament,
  life_span,
  weight,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col p-6">
        <h3 className="text-gray-900 text-xl font-medium mb-2">{name}</h3>
        <h4 className="text-lg font-semibold text-red-400 mb-2">{origin}</h4>
        <p className="text-gray-700 text-md mb-4 ellips-text">{description}</p>
        <a href={wikipedia_url} target="_blank" rel="noreferrer noopener">
          <button className="bg-red-400 text-white px-4 py-2 rounded-lg">
            Wikipedia
          </button>
        </a>
      </div>
      <hr className="border border-gray-400 w-full"></hr>
      <DetailsItemBody
        temperament={temperament}
        life_span={life_span}
        weight={weight}
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
}

export default CatsItemBody;
