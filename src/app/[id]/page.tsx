import Image from "next/image";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import Link from "next/link";
import prisma from "@/lib/prismadb";
import ProductList from "@/components/top_up/productList/productList";
import Pay from "@/components/top_up/pay/Pay";
import Email from "@/components/top_up/Email";
import Player from "@/components/top_up/Player";
const page = async ({ params }: { params: { id: string } }) => {
  const feedBarang = await prisma.barang.findFirst({
    where: {
      id_name: params?.id,
    },
  });
  const products: any = feedBarang?.topup_value;
  return (
    <>
      <main className="w-[90%] lg:w-[85%] m-auto mt-10">
        <div className="container-id grid lg:grid-cols-6 gap-5">
          <section className="product-info lg:col-span-2">
            <section className="product-details-container">
              <div className="product-details__banner-container">
                <Image
                  src={feedBarang?.banner ?? ""}
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </div>
              <div className="product-details__title py-3">
                <h1 className="text-white font-sans text-lg font-bold">
                  {feedBarang?.name}
                </h1>
              </div>
              <div className="product-details_trust_tag_container grid grid-cols-2 md:grid-cols-2 gap-3">
                <div className="product-details_trust_tag flex gap-2  sm:w-full items-center bg-white px-4 py-1 rounded-full text-xs">
                  <VscWorkspaceTrusted className="text-lg" />
                  <span className="font-bold">Pembayaran yang Aman</span>
                </div>
                <div className="product-details_trust_tag flex gap-2  sm:w-full items-center bg-white px-4 py-1 rounded-full text-xs">
                  <RiCustomerService2Line className="text-lg" />
                  <span className="font-bold">Layanan Pelanggan 24/7</span>
                </div>
              </div>
              <div className="product-details_description mt-6">
                <p className="text-white text-sm font-sans">
                  {feedBarang?.description}
                </p>
              </div>
              <div className="product-details_download flex gap-3 mt-3">
                <Link href={feedBarang?.download_one ?? ""} target="_blank">
                  <Image
                    src="/logo/app_store_coda.png"
                    alt=""
                    width={100}
                    height={200}
                  />
                </Link>
                <Link href={feedBarang?.download_two ?? ""} target="_blank">
                  <Image
                    src="/logo/google_play_coda.png"
                    alt=""
                    width={100}
                    height={200}
                  />
                </Link>
              </div>
            </section>
          </section>
          <section className="product-purchase lg:col-span-4">
            <div className="product_topup_container flex flex-col gap-5">
              {feedBarang?.field_one ? (
                <div className="player_id bg-white px-3 py-3 rounded-md">
                  <div className="player_title flex gap-2">
                    <div className=" bg-white px-1 py-1 rounded-full -mt-6">
                      <PiNumberCircleOneFill className="text-4xl hover:cursor-pointer text-purple-600" />
                    </div>
                    <h1 className="font-sans text-xl font-bold">
                      Masukkan Player ID
                    </h1>
                  </div>
                  <Player />
                  <div className="player_description">
                    <span className="text-gray-600 italic pt-2 text-[11px] block mt-2">
                      {feedBarang?.field_value}
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="product_container bg-white px-3 py-3 rounded-md">
                <div className="product_title flex gap-2">
                  <div className=" bg-white px-1 py-1 rounded-full -mt-6">
                    <PiNumberCircleTwoFill className="text-4xl hover:cursor-pointer text-purple-600" />
                  </div>
                  <h1 className="font-sans text-xl font-bold">
                    Pilih Nominal Top Up
                  </h1>
                </div>
                <ul className="product_list_container grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-5">
                  <ProductList product={products} />
                </ul>
              </div>
              <Email />
              <Pay game_name={feedBarang?.name ?? ""} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
