"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button  className="my-1 w-40 rounded-md px-4 py-1 transition-all hover:cursor-pointer hover:bg-slate-600"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Sign Out
    </button>
  );
};

export { SignOutButton };