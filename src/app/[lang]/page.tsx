import { api, HydrateClient } from "~/trpc/server";
import ProductList from "./_components/productList";
import Subscribe from "./_components/Footer/subscribe";

export default async function Home({ params }: { params: { lang: string } }) {
  void await api.post.getLatest.prefetch();
  const { lang } = params;

  return (
    <HydrateClient>
      <main className="text-white overflow-hidden">
        <div className="flex items-center justify-center flex-col">
          <div className="container flex min-h-20 max-w-screen-xl justify-center px-4 py-4 flex-col text-black">
            <ProductList />
          </div>
          <Subscribe />
        </div>
      </main>
    </HydrateClient>
  );
}
