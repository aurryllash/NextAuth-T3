import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/Header/header";
import ProductList from "./_components/productList";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-[#2e223d] to-[#15162c] text-white">
        <Header />
        <div className="flex items-center justify-center">
          <div className="container flex min-h-20 max-w-screen-xl justify-center px-4 py-4">
            <ProductList />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
