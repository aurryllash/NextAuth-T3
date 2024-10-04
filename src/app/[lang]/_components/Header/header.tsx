"use client";

import Image from "next/image";
import Link from "next/link";
import defaultProfileImage from "public/images/Default_profile.svg.png";
import { SignOutButton } from "../Buttons/SignOutButton";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SideNav from "./sideNav";
import Cart from "./cart";
import { nav } from "~/utils/const";
import type { LangType } from "~/types/constTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ dict, lang }: { dict: LangType; lang: string }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center bg-zinc-50 text-black">
      <div className="container flex min-h-20 max-w-screen-xl items-center justify-between px-4 py-4">
        {/* Side Nav */}
        <div className="md:hidden">
          {
            <SideNav
              isOpened={isOpened}
              setIsOpened={setIsOpened}
              nav={nav}
              session={session}
            />
          }
        </div>

        {/* Nav */}
        <div className="flex items-center justify-center gap-4">
          <div className="hidden gap-6 md:flex md:flex-1 md:flex-row md:justify-end lg:visible">
            {nav.map((eachNav, index) => {
              return (
                <Link
                  key={index}
                  href={eachNav.href}
                  className="rounded-md px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600"
                >
                  {eachNav.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          {session?.user.image && (
            <Image
              src={
                session?.user.image &&
                !session.user.image.includes(
                  "https://scontent.ftbs10-1.fna.fbcdn.net",
                )
                  ? `${session?.user.image}`
                  : defaultProfileImage
              }
              width={50}
              height={50}
              alt="Profile image"
              className="m-0 overflow-hidden rounded-full"
            />
          )}

          <div className="hidden md:block">
            {session?.user ? (
              <SignOutButton />
            ) : (
              <Link href={"/api/auth/signin"}>
                <button>Log In</button>
              </Link>
            )}
          </div>
          {<Cart setIsClosed={setIsOpened} />}
          <h1>{ dict.HOME }</h1>
          <h1>{ dict.ABOUT }</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
