import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function Time({ params }: { params: { lang: string } }) {
    const user = await getServerAuthSession();

    // if(!user) {
    //     return redirect('/404')
    // }
    const cookieStore = cookies();
    void cookieStore.get("theme")

    return <h1>{ new Date().toLocaleTimeString() }</h1>
} 