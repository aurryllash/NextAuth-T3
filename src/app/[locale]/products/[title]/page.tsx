import Image from "next/image";
import { api } from "~/trpc/server";
import type { Movie } from "~/types/constTypes";

export default async function Product({
  params,
}: {
  params: { title: string };
}) {
  const title = decodeURIComponent(params.title);
  const response = await api.product.getByTitle({
    title: title,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: Movie[] = await response.json();

  return (
    <div className="container mt-10 flex items-center justify-center mb-10">
      <div className="flex flex-row justify-between">
        <div>
          <Image
            src={
              "https://qbsay.com/cdn/shop/files/c7580b14-7cc3-4b23-92ff-104200e8c9db.jpg?v=1725557756&width=823"
            }
            width={1000}
            height={1000}
            alt="products"
            className="w-96 border-2"
          />
        </div>
        <div>
          {data.map((data, index) => {
            return (
              <div className="mt-0 text-base lg:mt-4 lg:text-lg" key={index}>
                <h1 className="bold text-4xl">{ data.title }</h1>
                <p className="text-gray-600">Year: {data.year}</p>
                <p className="text-gray-600">Rating: {data.rating}</p>
                <p className="text-gray-600">Genre: {data.genre}</p>
                <p className="text-gray-600">Director: {data.director}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
