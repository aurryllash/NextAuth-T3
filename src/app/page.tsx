import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/header";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <Header />
      </main>
    </HydrateClient>
  );
}
