import { footer_icons, footer_nav } from "~/utils/const";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 border-t-2 border-slate-200 p-10">
      <div className="flex gap-4">
        {footer_icons.map((icon, index) => {
          return (
            <Image
              key={index}
              src={icon.path}
              width={40}
              height={50}
              alt={icon.alt}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center md:flex-row gap-3 text-xs text-gray-400">
        {footer_nav.map((nav, index) => {
          return (
            <p
              key={index}
              className="cursor-pointer hover:text-black hover:underline"
            >
              {nav.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}
