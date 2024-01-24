"use client";
import { motion, useScroll } from "framer-motion";

export default function Animation({ children, type }) {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            {type == "scroll" ? (
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="bg-red-500 h-4 fixed top-0 left-0 right-0"
                ></motion.div>
            ) : null}
            {type == "enlarge" ? (
                <motion.div
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                />
            ) : null}
        </div>
    );
}
