import { api } from "~/trpc/server"

export default async function Posts() {
    const posts = api.post.getAllPost();
    return <div>
        { (await posts).map((post, index) => (
            <div key={index}>
                <h2>{post.name}</h2>
            </div>
        )) }
    </div>
}