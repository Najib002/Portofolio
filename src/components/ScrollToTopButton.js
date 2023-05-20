import React, { useState, useEffect } from "react";
import ArrowUp from "../assets/up-arrow.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-0 right-0 ${isVisible ? "show" : "hidden"}`}>
      <img
        onClick={scrollToTop}
        className="w-10 h-10 cursor-pointer mb-10 mx-2"
        alt="Back to top"
        src={ArrowUp}
      />
    </div>
  );
};

export default ScrollToTopButton;
