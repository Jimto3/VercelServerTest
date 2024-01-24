import Link from "next/link";
export const metadata = {
    title: "About | Tailwind",
};
import Animation from "../components/Animation";

export default async function AboutPage() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();

    return (
        <>
            <Animation />
            <div className="flex items-center flex-col text-fuchsia-500 font-mono font-extrabold text-3xl underline">
                <Link href="/">Home</Link>
                {posts.map((post) => {
                    return (
                        <Link
                            className="text-[1rem]"
                            key={post.id}
                            href={`/about/${post.id}`}
                        >
                            {post.title}
                        </Link>
                    );
                })}
                {/* <Link href="/about/Penguins">About Penguins</Link>
            <Link href="/about/Otters">About Otters</Link>
            <Link href="/about/Something- Else">About Something Else</Link> */}
            </div>
        </>
    );
}
