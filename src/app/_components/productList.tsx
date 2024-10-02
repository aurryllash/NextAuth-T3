import { api } from "~/trpc/server";
import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
};
export default async function PostsList() {
  const response = await api.product.getAllPost({ number: 4 });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  const products: Movie[] = await response.json();

  return (
    <div>
      <h1>Product List</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              <h2 className="text-xl font-semibold text-black h-16">
                {product.title}
              </h2>
              <div className="mt-4">
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
    </div>
  );
}
