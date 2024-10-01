import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import defaultProfileImage from "public/images/Default_profile.svg.png";

const Header = async () => {
  const session = await getServerSession();
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="mx-auto-4 container flex max-w-screen-xl items-center justify-between px-4 py-4">
        <div className="">
          <ul className="flex gap-20">
            <li>Home</li>
            <li>Dashboard</li>
            <li>About</li>
          </ul>
        </div>
        <div className="">
          <Link href={session ? "/profile" : '/api/auth/signin'}>
            <Image
              src={session ? `${session?.user?.image}` : defaultProfileImage}
              width={50}
              height={50}
              alt="Profile image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
