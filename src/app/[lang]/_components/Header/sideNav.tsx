"use client"

import Image from "next/image";
import Link from "next/link";
import menu_icon from "public/images/menu-bar.png";
import { SignOutButton } from "../Buttons/SignOutButton";
import type { Session } from "next-auth";

export default function SideNav({
  isOpened,
  setIsOpened,
  nav,
  session,
}: {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  nav: {
    title: string;
    href: string;
  }[];
  session: Session | null;
}) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity z-20 ${
          isOpened ? "block" : "hidden"
        }`}
        onClick={() => setIsOpened(false)}
      ></div>

      <div
        className={`fixed left-0 top-0 h-full transform bg-gray-800 text-white transition-transform z-20 ${
          isOpened
            ? "flex translate-x-0 flex-col items-center"
            : "-translate-x-full"
        }`}
        style={{ width: "250px", paddingTop: "60px" }}
      >
        <button
          className="absolute right-4 top-4 text-3xl"
          onClick={() => setIsOpened(false)}
        >
          &times;
        </button>
        <div className="flex flex-col justify-between items-center h-full">
            <div className="flex flex-col">
              {nav.map((eachNav, index) => {
                return (
                  <Link
                    key={index}
                    href={eachNav.href}
                    className="my-1 w-40 rounded-md px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600"
                  >
                    {eachNav.title}
                  </Link>
                );
              })}
            </div>
          <div className="mb-20">
            {session?.user ? (
              <SignOutButton />
            ) : (
              <Link href={"/api/auth/signin"}>
                <button className="my-1 w-40 rounded-md px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600" >Log In</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center rounded-md hover:cursor-pointer md:hidden">
        <Image
          src={menu_icon}
          className="w-8"
          width={50}
          height={40}
          alt="menu icon"
          onClick={() => setIsOpened(true)}
        ></Image>
      </button>
    </>
  );
}
