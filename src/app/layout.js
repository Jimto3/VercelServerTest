import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Homepage | Tailwind",
    description: "Just a Tailwind demo!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="text-[2rem] bg-green-500 flex flex-col items-center gap-4">
                    <h1>HomePage</h1>
                    <h2 className="mb-8">The Best Homepage There Is!</h2>
                </div>
                {children}
            </body>
        </html>
    );
}
