import React from "react";

function NavBar() {
  return (
    <>
      <nav className="invisible lg:visible fixed left-0 right-0 top-0 bg-old-blue shadow-lg px-3 py-4 z-30">
        <div className="relative mx-6 xl:mx-24">
          <div className="flex flex-row justify-center items-center">
            <a href="/" className="flex items-center py-3 px-4">
              <img
                className="flex w-10 h-auto items-center"
                src="/images/main-logo.svg"
                alt="Main logo"
              />
              <div className="flex">
                <span className="font-bold text-white text-lg lg:text-3xl px-3">
                  Arkademi
                </span>
              </div>
            </a>
            <div className="w-full max-w-5xl px-4">
              <label className="w-full relative">
                <input
                  id="search"
                  type="search"
                  placeholder="Cari Kelas"
                  className="form-input w-full appearance-none rounded-md border border-black bg-white py-4 pl-8 text-sm text-gray-500 placeholder-gray-400 focus:border-young-blue focus:outline-none"
                />
                <img
                  className="absolute top-1 left-2 w-4 h-auto"
                  src="/icons/search.svg"
                  alt="Search"
                />
              </label>
            </div>
            <img
              className="flex w-6 h-auto items-center mx-6 cursor-pointer hover:w-8 duration-300"
              src="/icons/love.svg"
              alt="Main logo"
            />
            <a
              href="#masuk"
              className="py-3 px-6 mx-4 font-medium text-lg text-young-blue bg-white rounded-md hover:bg-young-blue hover:text-white duration-300"
            >
              Masuk
            </a>
            <a
              href="#daftar"
              className="py-3 px-6 mx-4 font-medium text-lg text-white bg-young-blue rounded-md hover:bg-white hover:text-young-blue duration-300"
            >
              Daftar
            </a>
          </div>
        </div>
      </nav>
      <nav className="visible lg:invisible fixed left-0 right-0 top-0 bg-old-blue shadow-lg px-3 py-4 z-30">
        <div className="relative">
          <div className="flex flex-row justify-center items-center">
            <a href="/" className="flex items-center py-3 px-4">
              <img
                className="flex w-8 md:w-10 h-auto mx-2 items-center"
                src="/images/main-logo.svg"
                alt="Main logo"
              />
              <div className="flex">
                <span className="font-bold text-white text-3xl">
                  Arkademi
                </span>
              </div>
            </a>
            <img
              className="flex w-6 h-auto items-center mx-3 md:mx-6 cursor-pointer hover:w-8 duration-300"
              src="/icons/love.svg"
              alt="Main logo"
            />
            <a
              href="#masuk"
              className="py-3 px-6 mx-4 font-medium text-lg text-young-blue bg-white rounded-md hover:bg-young-blue hover:text-white duration-300"
            >
              Masuk
            </a>
            <a
              href="#daftar"
              className="py-3 px-6 mx-4 font-medium text-lg text-white bg-young-blue rounded-md hover:bg-white hover:text-young-blue duration-300"
            >
              Daftar
            </a>
          </div>
          <div className="w-full max-w-5xl px-4 my-4">
            <label className="w-full relative">
              <input
                id="search"
                type="search"
                placeholder="Cari Kelas"
                className="form-input w-full appearance-none rounded-md border border-black bg-white py-4 pl-8 text-sm text-gray-500 placeholder-gray-400 focus:border-young-blue focus:outline-none"
              />
              <img
                className="absolute top-1 left-2 w-4 h-auto"
                src="/icons/search.svg"
                alt="Search"
              />
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
