import React from "react";

function DetailsItemBody({
  nickname,
  age,
  quote,
  thumbnail,
  isOpen,
  toggleModal,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-gray-800/90 ${
          isOpen ? "" : "hidden"
        }`}
        onClick={toggleModal}
      >
        <div className="rounded-lg shadow-xl bg-white max-w-sm mx-8 my-12 sm:my-8">
          <div className="flex flex-col md:grid md:grid-cols-1 p-6">
            <img
              src={thumbnail.default}
              alt={nickname}
              className="rounded-lg bg-white max-w-xsm sm:max-w-sm my-8"
            ></img>
            <h3 className="text-gray-900 text-lg sm:text-2xl font-bold mb-2">
              {nickname}
            </h3>
            <h4 className="text-md sm:text-xl font-semibold text-red-400 mb-2">
              {age} years old
            </h4>
            <p className="italic text-gray-700 text-sm sm:text-lg text-center my-1">
              "{quote}"
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded mt-4 ml-auto"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsItemBody;
