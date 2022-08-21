import React from "react";
import ContentItem from "./ContentItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ContentList({ contents }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="max-w-5/6 mx-auto flex flex-col xl:flex-row justify-center py-6 px-8">
      <Slider {...settings}>
        {contents.map((content) => (
          <ContentItem key={content.id} id={content.id} {...content} />
        ))}
      </Slider>
    </div>
  );
}

export default ContentList;
