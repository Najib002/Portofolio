import React from "react";

function DetailsItemBody({
  temperament,
  life_span,
  weight,
  activeIndex,
  setActiveIndex,
  index,
}) {
  const handleSetIndex = (index) =>
    setActiveIndex(activeIndex === index ? 0 : index);
  return (
    <>
      <div className="flex flex-col self-stretch scroll-smooth">
        <button
          type="button"
          onClick={() => handleSetIndex(index)}
          className="text-gray-800 font-semibold text-lg cursor-pointer my-3"
        >
          Details
        </button>
        {activeIndex === index && (
          <div className="flex flex-col justify-center py-3 px-6">
            <p className="text-gray-900 text-md font-medium italic mb-2">
              {temperament}
            </p>
            <div className="flex flex-col lg:flex-row justify-center mt-2">
              <p className="text-sm text-center font-bold bg-gray-500 rounded-3xl text-gray-200 py-2 px-4 mb-2 lg:mb-1 mx-2">
                {weight.metric} Kgs
              </p>
              <p className="text-sm text-center font-bold bg-gray-500 rounded-3xl text-gray-200 py-2 px-4 mb-2 lg:mb-1 mx-2">
                {life_span} Average life span
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailsItemBody;
