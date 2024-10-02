import Image from "next/image";
import Link from "next/link";
import defaultProfileImage from "public/images/Default_profile.svg.png";
import { getServerAuthSession } from "~/server/auth";
import { SignOutButton } from "./Buttons/SignOutButton";

const Header = async () => {
  const session = await getServerAuthSession();
  console.log(session?.user.image)
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="container flex max-w-screen-xl items-center justify-between px-4 py-4 min-h-20">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          {/* <button className="flex items-center justify-center rounded-md bg-slate-300 px-4 py-1 hover:cursor-pointer hover:bg-slate-600 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5m0 12h-16.5m0-6h16.5"
              />
            </svg>
          </button> */}
          <ul className="hidden gap-6 md:flex md:flex-1 md:flex-row md:justify-end">
            <li className="rounded-md bg-slate-300 px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600">
              Home
            </li>
            <li className="rounded-md bg-slate-300 px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600">
              Dashboard
            </li>
            <li className="rounded-md bg-slate-300 px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600">
              About
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-4">
          {session?.user.image && (
            <Link href="/profile">
              <Image
                src={
                  session?.user.image
                    ? `${session?.user.image}`
                    : defaultProfileImage
                }
                width={50}
                height={50}
                alt="Profile image"
                className="overflow-hidden rounded-full m-0"
              />
            </Link>
          ) }

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
  );
};

export default Header;
