"use client";
import { Input } from "../ui/input";
import ToaltipView from "../feature/toaltipView";
import { useDispatch } from "react-redux";
import { order } from "@/redux/feature/order_payment";
import { useAppSelector } from "@/redux/store";
import { cn } from "@/lib/utils";
const Player = () => {
  const dispatch = useDispatch();
  const payment = useAppSelector((state) => state.order_payment);

  return (
    <div className="player_field_container sm:w-1/2 flex gap-3 items-center mt-4">
      <div className="player_field">
        <Input
          placeholder="Masukkan Player ID"
          className={cn("text-center w-full")}
          onChange={(e) =>
            dispatch(order({ ...payment, game_id: e.target.value }))
          }
        />
        <span className="text-red-600 text-xs hidden text-center  mt-2">
          Bagian ini harus diisi
        </span>
      </div>
      <ToaltipView />
    </div>
  );
};

export default Player;
