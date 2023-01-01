import React from "react";
import CatsItemBody from "./CatsItemBody";

function CatsItem({ name, origin, description, wikipedia_url, temperament, life_span, weight }) {
  return (
    <>
      <div className="rounded-lg shadow-xl bg-white max-w-sm my-8">
        <CatsItemBody
          name={name}
          origin={origin}
          description={description}
          wikipedia_url={wikipedia_url}
          temperament={temperament}
          life_span={life_span}
          weight={weight}
        />
      </div>
    </>
  );
}

export default CatsItem;
