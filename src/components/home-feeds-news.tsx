import Image from "next/image";
import React from "react";

const HomeFeedNews = () => {
  return (
    <div className="home-feeds-news mt-10 md:mt-20">
      <div className="home-feeds-title">
        <h1 className="text-white font-sans text-lg md:text-2xl duration-500 font-bold uppercase">
          News and Updates
        </h1>
      </div>
      <div className="news-section__article mt-5 md:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <article>
          <div className="news-section__article-image">
            <Image
              src="/article/ID_Cashback-Rewards-Loyalty-Program_569x216.jpg"
              height={600}
              width={600}
              alt=""
              className=" w-full"
            />
          </div>
          <div className="news-section__content bg-white px-4 py-3">
            <h3 className="news-section__content-title font-semibold text-sm">
              MEMPERKENALKAN CODA REWARDS!
            </h3>
            <p className="news-section__description mt-2 text-sm font-sans font-medium">
              Nikmati diskon pada pesanan-mu selanjutnya!
            </p>
          </div>
        </article>
        <article>
          <div className="news-section__article-image">
            <Image
              src="/article/newspromo_id.jpg"
              height={600}
              width={600}
              alt=""
              className=" w-full"
            />
          </div>
          <div className="news-section__content bg-white px-4 py-3">
            <h3 className="news-section__content-title uppercase font-semibold text-sm">
              Cek Info
            </h3>
            <p className="news-section__description mt-2 text-sm font-sans font-medium">
              Promo dan Berita update lainnya.
            </p>
          </div>
        </article>
        <article>
          <div className="news-section__article-image">
            <Image
              src="/article/Penipuan-APK ID.jpg"
              height={600}
              width={600}
              alt=""
              className=" w-full"
            />
          </div>
          <div className="news-section__content bg-white px-4 py-3">
            <h3 className="news-section__content-title font-semibold text-sm">
              Waspada Penipuan APK!
            </h3>
            <p className="news-section__description mt-2 text-sm font-sans font-medium">
              Promo dan Berita update lainnya.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HomeFeedNews;
