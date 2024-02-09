"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";
declare const window: Window &
  typeof globalThis & {
    snap: any;
  };
const Pay = ({ game_name }: { game_name: string }) => {
  const payment = useAppSelector((state) => state.order_payment);
  const handlePay = async () => {
    const request = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        name: game_name,
        quantity: 1,
        price: payment.amount,
      }),
    });
    const responseData = await request.json();
    window?.snap?.pay(responseData?.token);
  };
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENTKEY ?? "";
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [payment]);
  return (
    <div className="pay flex justify-end ">
      <Button
        className={cn("bg-red-500 rounded-full hover:bg-red-400 px-7")}
        onClick={handlePay}
      >
        Beli Sekarang!
      </Button>
    </div>
  );
};

export default Pay;
