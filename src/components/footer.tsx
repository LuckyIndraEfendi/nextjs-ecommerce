import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 px-5 md:px-10 py-6 md:py-10 bg-[#ffd700] sm:flex  sm:justify-around items-center">
        <ul className=" flex flex-col gap-1 ">
          <li>
            <Link
              href=""
              className="text-gray-900 font-bold font-sans text-sm lg:text-base"
            >
              TENTANG KAMI
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-gray-900 font-bold font-sans text-sm lg:text-base"
            >
              BISNIS PEMBAYARAN
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-gray-900 font-bold font-sans text-sm lg:text-base"
            >
              SYARAT DAN KETENTUAN
            </Link>
          </li>
        </ul>
        <p className="mt-6 sm:mt-0 font-sans text-sm ">
          Ikuti social media Lucky Store untuk mendapatkan promo dan info
          menarik lainnya.
        </p>
        <div className="social-media mt-5 sm:mt-0">
          <h1 className="font-bold font-sans text-lg">Follow Social Media</h1>
          <div className="social-media-icon flex items-center gap-4 mt-3">
            <Link href="">
              <FaInstagram className="text-4xl md:text-4xl" />
            </Link>
            <Link href="">
              <FaYoutube className="text-4xl md:text-4xl" />
            </Link>
            <Link href="">
              <FaTwitter className="text-4xl md:text-4xl" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
