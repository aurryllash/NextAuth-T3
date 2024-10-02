import { cookies } from "next/headers"

export default function Time() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme")
    console.log(theme)
    return <h1>{ new Date().toLocaleTimeString() }</h1>
}