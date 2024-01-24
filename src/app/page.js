import Link from "next/link";
import OtterImage from "./components/Image";

export default function Home() {
    return (
        <div>
            <nav>
                <Link
                    className="text-3xl font-extrabold underline tracking-widest text-amber-700"
                    href="/about"
                >
                    About
                </Link>
                <OtterImage />
            </nav>
        </div>
    );
}
