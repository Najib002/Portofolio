import React from "react";
import ImageItemBody from "./ImageItemBody";

function ImageItem({ image, title }) {
  return (
    <div className="flex flex-col">
      <ImageItemBody
        image={image}
        title={title}
      />
    </div>
  );
}

export default ImageItem;
