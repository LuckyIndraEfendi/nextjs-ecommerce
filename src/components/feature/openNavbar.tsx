import { MdOutlineDiscount } from "react-icons/md";
import { BsBookmarkDash } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
const OpenNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMenu className="text-white text-2xl" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#481553]">
        <SheetHeader>
          <SheetTitle
            className={cn("text-2xl mt-10 text-start text-white font-sans")}
          >
            Daftar Codashop Sekarang!
          </SheetTitle>
        </SheetHeader>
        <ul className="trusted mt-6 mb-10 grid  gap-5">
          <li className="flex gap-4">
            <MdOutlineDiscount className="text-yellow-300 text-3xl sm:text-4xl " />
            <span className="text-white font-sans text-sm sm:text-base">
              Jadilah yang pertama mengetahui promo dan penawaran ekslusif!
            </span>
          </li>
          <li className="flex gap-4">
            <BsBookmarkDash className="text-yellow-300  sm:text-2xl text-xl" />
            <span className="text-white font-sans text-sm sm:text-base">
              Akses riwayat pesanan anda dengan mudah
            </span>
          </li>
          <li className="flex gap-4">
            <GoShieldCheck className="text-yellow-300  sm:text-2xl text-xl" />
            <span className="text-white font-sans text-sm sm:text-base">
              Lebih cepat dan aman
            </span>
          </li>
        </ul>
        <SheetFooter
          className={cn(
            "flex flex-col sm:flex-col sm:justify-around sm:space-x-0 gap-3"
          )}
        >
          <Button
            type="submit"
            className={cn("rounded-full bg-red-500 hover:bg-red-600")}
          >
            Daftar
          </Button>
          <Button
            type="submit"
            className={cn(
              "rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300"
            )}
          >
            Masuk
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default OpenNavbar;
