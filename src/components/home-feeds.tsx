import { homeFeeds } from "@/lib/utils";
import Image from "next/image";
import prisma from "@/lib/prismadb";
import Link from "next/link";
const HomeFeeds = async () => {
  const feedBarang = await prisma.barang.findMany();
  return (
    <div className="home-feeds-item mt-14 md:mt-20">
      <div className="home-feeds-title">
        <h1 className="text-white font-sans text-lg md:text-2xl duration-500 font-bold uppercase">
          Lebih Hemat Pake Codacash
        </h1>
      </div>
      <div className="home-feeds-list-container mt-5 gap-3 md:gap-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {feedBarang.map((item, i) => (
          <Link
            href={item?.id_name}
            className="home-feeds-list-item group hover:cursor-pointer bg-[#36213d] rounded-md overflow-hidden"
            key={i}
          >
            <Image
              src={item?.images}
              height={400}
              width={400}
              alt=""
              className="rounded-b-2xl  "
            />
            <div className="home-feeds-clip-path"></div>
            <div className="home-feeds-list-item-title md:py-4 mb-2 py-2 px-3 ">
              <h1 className="text-white group-hover:text-pink-600 duration-200 font-sans font-semibold text-xs sm:text-sm text-center">
                {item?.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeFeeds;
