"use client";

import Image from "next/image";
import Link from "next/link";
import defaultProfileImage from "public/images/Default_profile.svg.png";
import { SignOutButton } from "../Buttons/SignOutButton";
import { useSession } from "next-auth/react";
import menu_icon from "public/images/burger-menu.png";
import { useState } from "react";
import SideNav from "./sideNav";

const nav = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/" },
  { title: "About", href: "/" },
];

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center">
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
                  className="rounded-md bg-slate-300 px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
