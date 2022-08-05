import React from "react";

function NavBar() {
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 bg-old-blue shadow-lg px-3 xs:px-4 py-4 z-30">
        <div className="relative mx-24">
          <div className="flex flex-row justify-center items-center">
            <a href="/" className="flex items-center py-3 px-4">
              <img
                className="flex w-10 h-auto items-center"
                src="/images/main-logo.svg"
                alt="Main logo"
              />
              <div className="hidden lg:flex">
                <span className="font-bold text-white text-lg lg:text-3xl px-3">
                  Arkademi
                </span>
              </div>
            </a>
            <div className="w-full max-w-5xl px-4">
              <label class="w-full">
                <input id="search" type="search" placeholder="Search" class="form-input w-full appearance-none rounded border border-gray-400 bg-white py-4 pl-8 text-sm text-gray-500 placeholder-gray-400 focus:border-cyan-600 focus:outline-none xs:pr-4" />
                <img className="absolute top-5 w-6 h-auto" src="/icons/search.svg" alt="Search" />
              </label>
            </div>
            <img
              className="flex w-6 h-auto items-center mx-6"
              src="/icons/love.svg"
              alt="Main logo"
            />
            <a
              href="#"
              className="py-4 px-6 mx-4 font-medium text-lg text-young-blue bg-white rounded-md hover:bg-green-500 duration-300"
            >
              Masuk
            </a>
            <a
              href="#"
              className="py-4 px-6 mx-4 font-medium text-lg text-white bg-young-blue rounded-md hover:bg-green-500 duration-300"
            >
              Daftar
            </a>
          </div>
        </div>
      </nav>
      <nav className="fixed sm:hidden bottom-0 right-0 left-0 right-0 bg-white border-t border-gray-300 px-4 py-2 z-50">
        <div className="grid grid-cols-4">
          <a href="#trade" className="flex flex-col items-center py-2">
            <img
              className="flex w-5 xs:w-7 h-auto items-center"
              src="./assets/icons/trade.svg"
              alt="Trade"
            />
            <span className="font-semibold hover:font-bold text-xs xs:text-sm px-2">
              Trade
            </span>
          </a>
          <a href="#earn" className="flex flex-col items-center py-2">
            <img
              className="flex w-5 xs:w-7 h-auto items-center"
              src="./assets/icons/earnings.svg"
              alt="Earn"
            />
            <span className="font-semibold hover:font-bold text-xs xs:text-sm px-2">
              Earn
            </span>
          </a>
          <a href="#referral" className="flex flex-col items-center py-2">
            <img
              className="flex w-5 xs:w-7 h-auto items-center"
              src="./assets/icons/coupon.svg"
              alt="Referral"
            />
            <span className="font-semibold hover:font-bold text-xs xs:text-sm px-2">
              Referral
            </span>
          </a>
          <a href="#nfts" className="flex flex-col items-center py-2">
            <img
              className="flex w-5 xs:w-7 h-auto items-center"
              src="./assets/icons/blockchain.svg"
              alt="NFTs"
            />
            <span className="font-semibold hover:font-bold text-xs xs:text-sm px-2">
              NFTs
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
