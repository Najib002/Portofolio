import React from "react";
import ContentItemBody from "./ContentItemBody";

function ContentItem({ tag, title, rating, discount, originalPrice, price }) {
  return (
    <div className="flex flex-row">
      <ContentItemBody
        tag={tag}
        title={title}
        rating={rating}
        discount={discount}
        originalPrice={originalPrice}
        price={price}
      />
    </div>
  );
}

export default ContentItem;
