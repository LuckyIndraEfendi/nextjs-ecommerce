import CardSlider from "@/components/card-slider";
import CodaAbout from "@/components/coda-about";
import HomeFeeds from "@/components/home-feeds";
import HomeFeedNews from "@/components/home-feeds-news";

export default function Home() {
  return (
    <>
      <main className="w-[90%] lg:w-[85%] m-auto mt-10">
        <CardSlider />
        <div className="home-feeds-container mt-10">
          <HomeFeeds />
          <span className="text-center mt-4 sm:mt-6 block text-[#e8f953] font-sans font-semibold underline hover:cursor-pointer">
            Tampilkan Semua
          </span>
          <HomeFeedNews />
          <CodaAbout />
        </div>
      </main>
    </>
  );
}
