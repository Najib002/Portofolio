import React from "react";
import Color from "./content/Color";
import {
  getInitialData,
  getImageDataCategory,
  getImageDataInstitution,
} from "../utils";
import ContentList from "./content/ContentList";
import ImageList from "./content-image/ImageList";

class ContentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: getInitialData(),
      imagesCategory: getImageDataCategory(),
      imagesInstitution: getImageDataInstitution(),
    };
  }

  render() {
    return (
      <div className="flex flex-col justify-center item-center mx-28 py-12 z-0">
        <div className="mb-12">
          <div className="flex flex-row 2xl:ml-12 items-center">
            <img
              className="mx-2"
              src="/icons/trending-icon.svg"
              alt="Trending Icon"
            />
            <h2 className="text-2xl font-bold mx-2">Trending</h2>
          </div>
          <ContentList contents={this.state.contents} />
        </div>
        <div className="mb-12">
          <div className="flex flex-col xl:flex-row 2xl:ml-12">
            <div className="flex flex-row">
              <img
                className="mx-2"
                src="/icons/flashsale-icon.svg"
                alt="Trending Icon"
              />
              <h2 className="text-2xl font-bold mx-2">Flash Sale</h2>
            </div>
            <div className="flex flex-row items-center mx-1">
              <p className="text-lg text-black font-medium px-2">
                Berakhir Dalam
              </p>
              <span className="text-md font-bold text-white bg-young-red mr-3 px-2 rounded-xl">
                08 : 52 : 05
              </span>
            </div>
          </div>
          <ContentList contents={this.state.contents} />
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold 2xl:ml-12">Kategori Terpopuler</h2>
          <ImageList images={this.state.imagesCategory} />
          <a
            href="#kategori"
            className="flex justify-center max-w-3xl md:max-w-xs py-3 px-6 mx-auto border font-bold text-lg text-young-blue border-young-blue bg-white rounded-md hover:bg-young-blue hover:text-white duration-300"
          >
            Lihat Semua Kategori
          </a>
        </div>
        <Color />
        <div className="mb-12">
          <h2 className="text-2xl font-bold 2xl:ml-12">Lembaga</h2>
          <ImageList images={this.state.imagesInstitution} />
        </div>
        <div className="mb-12">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold 2xl:ml-12">Terbaru</h2>
            <a href="#terbaru">
              <p className="flex justify-end text-young-blue text-lg font-bold mr-12 ">
                Lihat Semua
              </p>
            </a>
          </div>
          <ContentList contents={this.state.contents} />
        </div>
        <div className="mb-12">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold 2xl:ml-12">Bisnis</h2>
            <a href="#bisnis">
              <p className="flex justify-end text-young-blue text-lg font-bold mr-12 ">
                Lihat Semua
              </p>
            </a>
          </div>
          <ContentList contents={this.state.contents} />
        </div>
        <div className="mb-12">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold 2xl:ml-12">Pengembangan Karir</h2>
            <a href="#pengembangan-karir">
              <p className="flex justify-end text-young-blue text-lg font-bold mr-12 ">
                Lihat Semua
              </p>
            </a>
          </div>
          <ContentList contents={this.state.contents} />
        </div>
      </div>
    );
  }
}

export default ContentApp;
