"use client";

import Image from "next/image";
import cart_icon from "public/images/shopping-bag.png";
import { useState } from "react";

export default function Cart({ setIsClosed }: { setIsClosed: (isClosed: boolean) => void}) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity ${
          isOpened ? "block" : "hidden"
        }`}
        onClick={() => setIsOpened(false)}
      ></div>

      <div
        className={`fixed bottom-0 right-0 z-20 h-full transform bg-gray-800 text-white transition-transform ${
          isOpened
            ? "flextranslate-x-0 flex-col items-center"
            : "translate-x-full"
        }`}
        style={{ width: "250px", paddingTop: "60px" }}
      >
        <button
          className="absolute right-4 top-4 text-3xl"
          onClick={() => setIsOpened(false)}
        >
          &times;
        </button>
        <div className="flex h-full flex-col items-center justify-between">
          <h1>CART</h1>
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
            setIsOpened(true)
            setIsClosed(false)
        }}
        />
      </button>
    </>
  );
}
