"use client";
import { IDRFormat } from "@/utils/formatCurrency";
import { useDispatch } from "react-redux";
import { order } from "@/redux/feature/order_payment";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
interface ProductsType {
  name: string;
  amount: number;
}
type ProductsTypeArray = [
  {
    name: string;
    amount: number;
  }
];
const ProductList = ({ product }: { product: ProductsTypeArray }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const payment = useAppSelector((state) => state.order_payment);

  const handleClick = (index: number, e: any) => {
    const amount = parseInt(e.amount);
    dispatch(order({ ...payment, amount }));
    setActiveIndex(index);
  };

  return (
    <>
      {product?.map((item: ProductsType, i: number) => (
        <li
          className={`ring-2  ring-gray-600 py-3 px-3 text-center rounded-md hover:cursor-pointer product-list ${
            activeIndex === i ? "bg-[rgba(0,0,0,.1)]" : ""
          }`}
          key={i}
          onClick={() => handleClick(i, item)}
        >
          <div className="product_list font-sans font-semibold text-gray-800 ">
            {item?.name}
          </div>
          <span className="text-sm font-sans text-pink-600">
            {IDRFormat.format(item?.amount)}
          </span>
        </li>
      ))}
    </>
  );
};

export default ProductList;
