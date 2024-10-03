import { middle_icons } from "~/utils/const";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="mt-10 lg:mt-52 flex w-full items-center justify-center border-t-2 border-slate-200">
      <div className="container flex w-full flex-col items-start md:items-center justify-between gap-4 p-10 md:flex-row">
        <div className="flex flex-col gap-4">
          <p className="text-base font-bold text-black lg:text-2xl">
            Subscribe to get notified about new products
          </p>
          {/* input */}
          <div className="flex w-60 xs:w-72 md:w-80 flex-row justify-between border-2 border-black p-1 sm:p-2 lg:w-80 overflow-hidden text-black text-sm md:text-lg">
            <input
              type="text"
              placeholder="John@gmail.com"
              className="w-40 h-5 outline-none"
            />
            <Image
              src={"/images/footer/icons8-arrow-30.png"}
              width={20}
              height={40}
              alt="Enter Icon"
            />
          </div>
        </div>
        <div>
          {middle_icons.map((icon, index) => {
            return (
              <Image
                key={index}
                src={icon.path}
                width={30}
                height={20}
                alt="social icon"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
