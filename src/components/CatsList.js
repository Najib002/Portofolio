import React from "react";
import CatsItem from "./CatsItem";

function CatsList({ cats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 mx-5 md:mx-10 lg:mx-30">
      {cats.map((cat) => (
        <CatsItem key={cat.id} {...cat} />
      ))}
    </div>
  );
}

export default CatsList;
