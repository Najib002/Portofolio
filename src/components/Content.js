import React from "react";

function Content() {
  return (
    <>
      <div className="flex flex-col mx-28 py-12">
        <span className="text-2xl font-bold 2xl:ml-12">Promo Spesial Untukmu</span>
        <div className="flex flex-col xl:flex-row justify-center mx-12 py-6">
          <span className="flex px-48 py-28 2xl:px-64 2xl:py-32 rounded-3xl bg-old-blue mx-4 my-8"></span>
          <span className="flex px-48 py-28 2xl:px-64 2xl:py-32 rounded-3xl bg-young-blue mx-4 my-8"></span>
          <span className="flex px-48 py-28 2xl:px-64 2xl:py-32 rounded-3xl bg-old-green mx-4 my-8"></span>
        </div>
      </div>
    </>
  );
}

export default Content;
