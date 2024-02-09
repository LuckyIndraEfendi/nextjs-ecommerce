import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { cn } from "@/lib/utils";
import OpenNavbar from "./feature/openNavbar";
import NotificationOver from "./feature/notificationOver";

const Navbar = () => {
  return (
    <nav className=" py-4 ">
      <header className="w-[90%] lg:w-[85%] m-auto flex items-center  justify-between">
        <div className="left-nav flex items-center gap-3">
          <div className="hamburger hover:cursor-pointer ring-1 hover:bg-[rgba(255,255,255,0.1)] ring-gray-400 p-[6px] rounded-md">
            <OpenNavbar />
          </div>
          <div className="logo">
            <Image
              src="/logo/codashop.png"
              alt="codashop"
              width={100}
              height={100}
              className="w-32 sm:w-36"
            />
          </div>
          <span className="text-xs hidden italic md:block text-gray-200">
            Website top-up terbesar, tercepat dan terpercaya untuk pembelian
            kredit game dan entertainment
          </span>
        </div>
        <div className="right-nav flex items-center gap-1 sm:gap-2">
          <div className="search-nav hover:cursor-pointer duration-200 p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] ">
            <IoSearch className="text-white text-xl" />
          </div>
          <NotificationOver />
          <div className="daftar">
            <Button
              className={cn(
                "bg-red-500 hover:bg-red-400 rounded-full w-[70px] text-sm text-white font-medium font-sans md:w-28"
              )}
              variant="secondary"
            >
              Daftar
            </Button>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
