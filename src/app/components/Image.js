import Image from "next/image";
import otter from "@/../public/otter.jpg";
export default function RenderImage() {
    return <Image src={otter} alt="Otter Image" placeholder="blur" />;
}
