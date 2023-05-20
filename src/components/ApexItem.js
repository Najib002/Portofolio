import React from "react";
import ApexItemBody from "./ApexItemBody";

function ApexItem({ name, type, quote, nickname, thumbnail, home, age, desc }) {
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
        />
      </div>
    </>
  );
}

export default ApexItem;
