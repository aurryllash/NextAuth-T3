import { api, HydrateClient } from "~/trpc/server";
import Image from "next/image";
import type { Movie } from "~/types/constTypes";

export default async function PostsList() {
  const response = await api.product.getAllPost({ number: 4 });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const products: Movie[] = await response.json();

  return (
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Movie) => (
          <div
            key={product.id}
            className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
          >
            <Image
              src={product.poster}
              alt={product.title}
              className="h-48 w-full object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-4">
              <h2 className="h-16 text-base font-semibold text-black lg:text-xl">
                {product.title}
              </h2>
              <div className="mt-0 text-base lg:mt-4 lg:text-lg">
                <p className="text-gray-600">Year: {product.year}</p>
                <p className="text-gray-600">Rating: {product.rating}</p>
                <p className="text-gray-600">
                  Genre: {product.genre.join(", ")}
                </p>
                <p className="text-gray-600">Director: {product.director}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
