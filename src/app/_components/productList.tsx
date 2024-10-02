import { api } from "~/trpc/server"
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
    const response = await api.product.getAllPost({ number: undefined });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const products: Movie[] = await response.json();
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product: Movie, index: number) => (
                    <li key={index}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}