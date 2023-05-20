import React, { useState } from "react";
import DetailsItemBody from "./DetailsItemBody";

function ApexItemBody({
  name,
  nickname,
  type,
  quote,
  thumbnail,
  home,
  age,
  desc,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSetModal = () => setModalOpen(!isModalOpen);
  return (
    <>
      <div
        className="flex flex-col md:grid md:grid-cols-1 p-6 cursor-pointer"
        onClick={handleSetModal}
      >
        <img
          src={thumbnail.small}
          alt={nickname}
          className="xsm:hidden md:block rounded-lg bg-white max-w-sm my-8"
        ></img>
        <img
          src={thumbnail.default}
          alt={nickname}
          className="xsm:block md:hidden rounded-lg bg-white max-w-xsm my-8"
        ></img>
        <h3 className="text-gray-900 text-lg sm:text-2xl font-bold mb-2">
          {name} A.K.A {nickname}
        </h3>
        <h4 className="text-md sm:text-xl font-semibold text-red-400 mb-2">
          {type} - {home}
        </h4>
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="text-gray-700 text-sm sm:text-lg my-4 ellips-text"
        ></p>
      </div>
      <DetailsItemBody
        thumbnail={thumbnail}
        nickname={nickname}
        age={age}
        quote={quote}
        isOpen={isModalOpen}
        toggleModal={handleSetModal}
      />
    </>
  );
}

export default ApexItemBody;
