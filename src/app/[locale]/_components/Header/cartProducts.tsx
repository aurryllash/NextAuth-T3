import type { Movie } from "~/types/constTypes";
import Image from "next/image";

export default function CartProducts({ data }: { data: Movie }) {

  return (
    <div className="mb-4 flex p-4">
      <div className="w-20">
        <Image src={data.poster} width={50} height={50} alt={data.title} />
      </div>
      <div>
        <h3 className="text-sm">{data.title}</h3>
        <p className="text-xs">{data.country}</p>
      </div>
    </div>
  );
}
