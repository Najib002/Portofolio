import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-young-gray max-w-full">
        <div className="flex flex-col xl:flex-row justify-between mx-20 py-6 items-center">
          <img
            className="flex w-1/2 h-auto -ml-20"
            src="/images/footer-content.svg"
            alt="Footer Content"
          />
          <div className="flex flex-col mx-24">
            <div className="flex flex-col my-2">
              <a href="/" className="flex items-center py-3">
                <img
                  className="flex w-10 h-auto items-center"
                  src="/images/main-logo-blue.svg"
                  alt="Main logo"
                />
                <div className="flex text-old-blue">
                  <span className="font-bold text-lg lg:text-3xl px-3">
                    Arkademi
                  </span>
                </div>
              </a>
              <span className="font-medium">
                Arkademi adalah massive open online course (MOOC) platform karya
                anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan
                untuk skill based learning atau pembelajaran berbasis keahlian
                yang diantarkan melalui kelas belajar dan kursus online melalui
                aplikasi Arkademi berbasis mobile app dan web. Di Arkademi
                setiap individu dan lembaga kursus dapat membuka dan
                mengkomersialkan kelas onlinenya dan menjangkau siswa dari
                seluruh Indonesia.
              </span>
            </div>
            <div className="flex flex-col my-2">
              <span className="font-extrabold text-lg">Akselerator</span>
              <span className="font-medium">
                Arkademi adalah bagian program inkubasi dan akselerator dari
                perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator),
                Amazon Web Service (Edstart Program) dan Y Combinator (Startup
                School) yang dipilih dari tech startup edukasi terbaik dunia.
              </span>
            </div>
            <div className="flex flex-row my-2">
              <img
                className="flex w-16 h-6 items-center mr-4"
                src="/images/MOX.jpeg"
                alt="Main logo"
              />
              <img
                className="flex w-32 h-7 items-center mx-4"
                src="/images/Y-Combinator.jpeg"
                alt="Main logo"
              />
              <img
                className="flex w-8 h-8 items-center mx-4"
                src="/images/AWS.jpeg"
                alt="Main logo"
              />
              <img
                className="flex w-54 h-6 items-center mx-4"
                src="/images/Google-Startups.jpeg"
                alt="Main logo"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-old-gray"></hr>
      <div className="bg-young-gray max-w-full">
        <div className="flex flex-col lg:flex-row mx-12 justify-between">
          <div className="flex flex-col py-4 mb-2 mt-12 mx-4 md:mx-20">
            <h6 className="font-bold text-lg text-black mb-6">
              Kategori Terpopuler
            </h6>
            <p className="font-medium text-md text-black my-1">Keuangan</p>
            <p className="font-medium text-md text-black my-1">Perpajakan</p>
            <p className="font-medium text-md text-black my-1">Bisnis</p>
            <p className="font-medium text-md text-black my-1">Marketing</p>
            <p className="font-medium text-md text-black my-1">Kewirausahaan</p>
            <p className="font-medium text-md text-black my-1">Investasi</p>
          </div>
          <div className="flex flex-col py-4 my-2 lg:my-12 mx-4 md:mx-20">
            <h6 className="font-bold text-lg text-black mb-6">Lainnya</h6>
            <p className="font-medium text-md text-black my-1">Panduan</p>
            <p className="font-medium text-md text-black my-1">FAQ</p>
            <p className="font-medium text-md text-black my-1">Tentang Kami</p>
            <p className="font-medium text-md text-black my-1">Karir</p>
            <p className="font-medium text-md text-black my-1">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col py-4 my-2 lg:my-12 mx-4 md:mx-20">
            <h6 className="font-bold text-lg text-black mb-6">
              Metode Pembayaran
            </h6>
            <img
              src="/images/payment.jpeg"
              alt="Payment"
              className="w-1/2 h-auto"
            />
          </div>
          <div className="flex flex-col py-4 my-2 lg:my-12 mx-4 md:mx-20">
            <h6 className="font-bold text-lg text-black mb-2">
              Ikuti Kami
            </h6>
            <div className="flex flex-row">
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="mr-2 w-10 h-auto"
              />
              <img
                src="/icons/youtube.svg"
                alt="Youtube"
                className="mx-2 w-10 h-auto"
              />
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="mx-2 w-10 h-auto"
              />
              <img
                src="/icons/linkedin.svg"
                alt="Linkedin"
                className="mx-2 w-10 h-auto"
              />
            </div>
            <h6 className="font-bold text-lg text-black mt-8 mb-2">
              Arkademi Mobile App
            </h6>
            <div className="flex flex-row">
              <img
                src="/images/playstore.svg"
                alt="Playstore"
                className="mr-2 lg:w-full h-auto"
              />
              <img
                src="/images/appstore.svg"
                alt="Appstore"
                className="mx-2 lg:w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-old-gray">
        <div className="flex flex-row justify-between mx-6 lg:mx-28 py-6 items-center">
          <span className="font-medium text-gray-500">
            © 2022 PT Arkademi Daya Indonesia
          </span>
          <div className="flex flex-row">
            <a
              href="#ketentuan-layanan"
              className="font-medium text-black px-8"
            >
              Ketentuan Layanan
            </a>
            <a href="#kontak" className="font-medium text-black px-8">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
