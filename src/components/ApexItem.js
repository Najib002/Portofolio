import React from "react";
import ApexItemBody from "./ApexItemBody";

function ApexItem({ name, type, quote, nickname, thumbnail, home, age, desc, ability }) {
  return (
    <>
      <div className="rounded-lg shadow-xl bg-white max-w-sm my-8">
        <ApexItemBody
          name={name}
          nickname={nickname}
          type={type}
          quote={quote}
          thumbnail={thumbnail}
          home={home}
          age={age}
          desc={desc}
          ability={ability}
        />
      </div>
    </>
  );
}

export default ApexItem;
