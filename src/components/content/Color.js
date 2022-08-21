import React from "react";

function Color() {
  return (
    <>
      <div className="flex flex-col py-12 justify-center">
        <p className="text-2xl font-bold md:ml-12 w-full">Promo Spesial Untukmu</p>
        <div className="flex flex-col xl:flex-row justify-center py-6">
          <span className="flex px-48 py-28 2xl:px-64 2xl:py-32 rounded-3xl bg-old-blue md:mx-4 my-8"></span>
          <span className="flex px-48 py-28 2xl:px-64 2xl:py-32 rounded-3xl bg-young-blue md:mx-4 my-8"></span>
          <span className="flex px-48 py-28 2xl:px-64 2xl:py-32 rounded-3xl bg-old-green md:mx-4 my-8"></span>
        </div>
      </div>
    </>
  );
}

export default Color;
