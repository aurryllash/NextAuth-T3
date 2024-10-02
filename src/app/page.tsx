import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/Header/header";
import ProductList from "./_components/productList";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <Header />
          <h1>{ new Date().toLocaleTimeString() }</h1>
          <div>
            <ProductList />
          </div>
      </main>
    </HydrateClient>
  );
}
