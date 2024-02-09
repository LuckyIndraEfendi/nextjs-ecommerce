"use client";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { order } from "@/redux/feature/order_payment";
import { useAppSelector } from "@/redux/store";
const Email = () => {
  const dispatch = useDispatch();
  const payment = useAppSelector((state) => state.order_payment);

  return (
    <div className="email_id bg-white px-3 py-3 rounded-md">
      <div className="email_title flex gap-2">
        <div className=" bg-white px-1 py-1 rounded-full -mt-6">
          <PiNumberCircleThreeFill className="text-4xl hover:cursor-pointer text-purple-600" />
        </div>
        <h1 className="font-sans text-xl font-bold">Beli!</h1>
      </div>
      <div className="email_field_container mt-3 ">
        <div className="email_field">
          <Input
            placeholder="Masukkan Email Address"
            className=""
            type="email"
            name="email"
            onChange={(e) =>
              dispatch(order({ ...payment, email: e.target.value }))
            }
          />
          <span className="text-red-600 text-xs hidden text-center  mt-2">
            Bagian ini harus diisi
          </span>
        </div>
      </div>
      <div className="email_description">
        <span className="text-gray-600 italic pt-2 text-[11px] block mt-2">
          Opsional: Jika anda ingin mendapatkan bukti pembayaran atas pembelian
          anda, harap mengisi alamat emailnya Lucky Rewards sebesar 3% yang
          terkirim akan di notify ke email kamu
        </span>
      </div>
    </div>
  );
};

export default Email;
