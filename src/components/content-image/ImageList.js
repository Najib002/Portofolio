import React from "react";
import ImageItem from "./ImageItem";

function ImageList({ images }) {
  return (
    <>
      <div className="grid grid-rows-7 xl:grid-cols-7 gap-6 xl:flex-row xl:justify-center py-6 px-12 mb-2 w-full">
        {images.map((image) => (
          <ImageItem key={image.id} id={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default ImageList;
