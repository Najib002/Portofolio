import React from "react";
import ApexItem from "./ApexItem";

function ApexList({ apexs }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 mx-5 md:mx-10 lg:mx-30">
      {apexs.map((apex) => (
        <ApexItem key={apex.nickname} {...apex} />
      ))}
    </div>
  );
}

export default ApexList;
