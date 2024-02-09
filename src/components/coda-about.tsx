import Image from "next/image";
import React from "react";

const CodaAbout = () => {
  return (
    <>
      <section className="coda_about mt-10 md:mt-16">
        <div className="coda-about__content">
          <h1 className="coda-about__header uppercase  text-2xl text-white font-bold font-sans">
            Codashop Indonesia
          </h1>
          <h2 className="coda-about__sub-header text-sm mt-5 sm:text-base text-white font-sans font-medium">
            Codashop: Website top-up terbesar, tercepat dan terpercaya di
            Indonesia
          </h2>
          <p className="coda-about__short-description mt-3 text-white text-sm font-sans font-light">
            Setiap bulannya, jutaan gamers menggunakan Codashop untuk melakukan
            pembelian kredit game dengan lancar: tanpa registrasi ataupun
            log-in, dan kredit permainan akan ditambahkan secara instan. Top-up
            Mobile Legends, Free Fire, Ragnarok M, dan berbagai game lainnya!
          </p>
          <div className="coda-about__card-group mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="coda-about__card-group_container flex  gap-3">
              <div className="coda-about__card-icon-container  p-1">
                <Image
                  src="/about/easy_and_fast_portal.png"
                  width={500}
                  height={500}
                  className="w-40 sm:w-24 bg-white p-1   rounded-full"
                  alt=""
                />
              </div>
              <div className="coda-about__card-content">
                <h3 className="coda-about__card-title text-white font-sans font-medium">
                  Bayar dalam hitungan detik
                </h3>
                <p className="coda-about__card-description mt-1 text-xs text-white font-sans font-light">
                  Hanya dibutuhkan beberapa detik saja untuk menyelesaikan
                  pembayaran di Codashop karena situs kami berfungsi dengan baik
                  dan mudah untuk digunakan.
                </p>
              </div>
            </div>
            <div className="coda-about__card-group_container flex  gap-3">
              <div className="coda-about__card-icon-container  p-1">
                <Image
                  src="/about/instant_delivery_portal.png"
                  width={500}
                  height={500}
                  className="w-40 sm:w-24 bg-white p-1   rounded-full"
                  alt=""
                />
              </div>
              <div className="coda-about__card-content">
                <h3 className="coda-about__card-title text-white font-sans font-medium">
                  Pengiriman instan
                </h3>
                <p className="coda-about__card-description mt-1 text-xs text-white font-sans font-light">
                  Ketika kamu melakukan top-up di Codashop, item atau barang
                  yang kamu beli akan selalu dikirim ke akun kamu secara instan
                  dan cepat, tanpa tertunda.
                </p>
              </div>
            </div>
            <div className="coda-about__card-group_container flex  gap-3">
              <div className="coda-about__card-icon-container  p-1">
                <Image
                  src="/about/payment_method_portal.png"
                  width={500}
                  height={500}
                  className="w-40 sm:w-24 bg-white p-1   rounded-full"
                  alt=""
                />
              </div>
              <div className="coda-about__card-content">
                <h3 className="coda-about__card-title text-white font-sans font-medium">
                  Metode pembayaran terbaik
                </h3>
                <p className="coda-about__card-description mt-1 text-xs text-white font-sans font-light">
                  Kami menawarkan begitu banyak pilihan pembayaran mulai dari
                  potong pulsa, e-wallet, bank transfer, dan pembayaran di mini
                  market terdekat.
                </p>
              </div>
            </div>
            <div className="coda-about__card-group_container flex  gap-3">
              <div className="coda-about__card-icon-container  p-1">
                <Image
                  src="/about/customer_support_portal.png"
                  width={500}
                  height={500}
                  className="w-24 sm:w-14 bg-white p-1   rounded-full"
                  alt=""
                />
              </div>
              <div className="coda-about__card-content">
                <h3 className="coda-about__card-title text-white font-sans font-medium">
                  Layanan Pelanggan Cepat & Ramah
                </h3>
                <p className="coda-about__card-description mt-1 text-xs text-white font-sans font-light">
                  Tim CS terbaik kami selalu siap membantumu kapanpun, di
                  manapun. Hubungi kami!
                </p>
              </div>
            </div>
            <div className="coda-about__card-group_container flex  gap-3">
              <div className="coda-about__card-icon-container  p-1">
                <Image
                  src="/about/easy_and_fast_portal.png"
                  width={500}
                  height={500}
                  className="w-40 sm:w-24 bg-white p-1   rounded-full"
                  alt=""
                />
              </div>
              <div className="coda-about__card-content">
                <h3 className="coda-about__card-title text-white font-sans font-medium">
                  Bayar dalam hitungan detik
                </h3>
                <p className="coda-about__card-description mt-1 text-xs text-white font-sans font-light">
                  Hanya dibutuhkan beberapa detik saja untuk menyelesaikan
                  pembayaran di Codashop karena situs kami berfungsi dengan baik
                  dan mudah untuk digunakan.
                </p>
              </div>
            </div>
            <div className="coda-about__card-group_container flex  gap-3">
              <div className="coda-about__card-icon-container  p-1">
                <Image
                  src="/about/easy_and_fast_portal.png"
                  width={500}
                  height={500}
                  className="w-40 sm:w-24 bg-white p-1   rounded-full"
                  alt=""
                />
              </div>
              <div className="coda-about__card-content">
                <h3 className="coda-about__card-title text-white font-sans font-medium">
                  Bayar dalam hitungan detik
                </h3>
                <p className="coda-about__card-description mt-1 text-xs text-white font-sans font-light">
                  Hanya dibutuhkan beberapa detik saja untuk menyelesaikan
                  pembayaran di Codashop karena situs kami berfungsi dengan baik
                  dan mudah untuk digunakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodaAbout;
