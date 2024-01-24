import Link from "next/link";

export function generateMetadata({ params }) {
    return {
        title: `About ${params.id} | Tailwind`,
    };
}

export default async function AboutPageID({ params }) {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await data.json();
    return (
        <>
            <div className="flex flex-col items-center text-[1.2rem] text-red-600 bg-cyan-500 text-center">
                <h2 className="text-[2rem] font-mono text-amber-900 font-extrabold">
                    About: {post.title}
                </h2>
                <h3>{post.body}</h3>
            </div>
            <Link
                href="/about"
                className="underline text-red-500 font-bold font-mono"
            >
                Back
            </Link>
        </>
    );
}
