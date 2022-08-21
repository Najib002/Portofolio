import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="flex flex-row mt-28 justify-center">
        <div className="flex flex-row justify-start items-center">
          <span className="font-bold text-black text-md xl:text-xl px-1">
            Kategori
          </span>
          <img
            className="flex w-3 h-auto mx-1 pt-1"
            src="/icons/arrow-down.svg"
            alt="Main logo"
          />
        </div>
        <div className="flex flex-row mx-8 xl:mx-16">
          <a
            href="#bisnis"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Bisnis
          </a>
          <a
            href="#keuangan"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Keuangan
          </a>
          <a
            href="#pengembangan-karir"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Pengembangan Karir
          </a>
          <a
            href="#teknologi"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Teknologi
          </a>
          <a
            href="#bahasa"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Bahasa
          </a>
          <a
            href="#korporat"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Korporat
          </a>
          <a
            href="#hobi"
            className="text-md xl:text-xl mx-3 xl:mx-5 font-semibold hover:font-bold duration-300"
          >
            Hobi
          </a>
        </div>
      </div>
      <div className="flex flex-col mt-12 justify-center mx-12 max-w-1/2 xl:mx-24">
        <Slider {...settings}>
          <img
            className="flex w-full h-auto rounded-3xl"
            src="/images/header.jpeg"
            alt="Header"
          />
          <img
            className="flex w-full h-auto rounded-3xl"
            src="/images/header.jpeg"
            alt="Header"
          />
          <img
            className="flex w-full h-auto rounded-3xl"
            src="/images/header.jpeg"
            alt="Header"
          />
        </Slider>
        <div className="flex flex-col xl:flex-row mr-4 my-6 justify-center items-center">
            <div className="relative w-1/2 mx-2 my-2 lg:my-4 h-auto">
              <img
                className="w-full h-auto mx-3 rounded-3xl"
                src="/images/header-content-1.jpeg"
                alt="Header"
              />
              <span className="absolute top-8 2xl:top-12 left-6 text-black text-md xl:text-xl font-bold">
                Menjadi ahli<span className="text-old-blue"> Akuntansi</span>
              </span>
            </div>
            <div className="relative w-1/2 mx-2 my-2 lg:my-4 h-auto">
              <img
                className="w-full h-auto mx-3 rounded-3xl"
                src="/images/header-content-2.jpeg"
                alt="Header"
              />
              <span className="absolute top-6 2xl:top-12 left-6 text-black text-md xl:text-xl font-bold">
                Menjadi ahli
                <span className="text-old-blue">
                  {" "}
                  K3 (Kesehatan & Keselamatan Kerja)
                </span>
              </span>
            </div>
            <div className="relative w-1/2 mx-2 my-2 lg:my-4 h-auto">
              <img
                className="w-full h-auto mx-3 rounded-3xl"
                src="/images/header-content-3.jpeg"
                alt="Header"
              />
              <span className="absolute top-5 2xl:top-12 left-6 text-black text-md xl:text-xl font-bold">
                Menjadi ahli
                <span className="text-old-blue">
                  {" "}
                  Kesehatan, Keselamatan Kerja & Perlindungan Lingkungan (K3LL)
                </span>
              </span>
            </div>
        </div>
        <a
          href="#spesialisasi"
          className="flex justify-center max-w-xs py-3 px-6 mx-auto border  font-bold text-lg text-black bg-white rounded-md hover:bg-black hover:text-white duration-300"
        >
          Lihat Semua Spesialisasi
        </a>
      </div>
    </>
  );
}

export default Header;
