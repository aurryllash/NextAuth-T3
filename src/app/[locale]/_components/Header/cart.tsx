"use client";

import Image from "next/image";
import cart_icon from "public/images/shopping-bag.png";
import { useState } from "react";
import { api } from "~/trpc/react";
import CartProducts from "./cartProducts";

export default function Cart({
  setIsClosed,
}: {
  setIsClosed: (isClosed: boolean) => void;
}) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { data } = api.product.getAllPost.useQuery({
    number: 4,
  });
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity ${
          isOpened ? "block" : "hidden"
        }`}
        onClick={() => setIsOpened(false)}
      ></div>

      <div
        className={`fixed bottom-0 right-0 z-20 h-full w-64 transform bg-gray-800 pt-14 text-white transition-transform md:w-96 ${
          isOpened
            ? "flextranslate-x-0 flex-col items-center"
            : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-4 top-4 text-3xl"
          onClick={() => setIsOpened(false)}
        >
          &times;
        </button>
        <div className="flex h-full flex-col items-center gap-10">
          <h1>CART</h1>
          <div>
            {data?.map((data, index) => {
              return <CartProducts key={index} data={data} />;
            })}
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center rounded-md hover:cursor-pointer">
        <Image
          className="w-6"
          src={cart_icon}
          width={100}
          height={40}
          alt="menu icon"
          onClick={() => {
            setIsOpened(true);
            setIsClosed(false);
          }}
        />
      </button>
    </>
  );
}
