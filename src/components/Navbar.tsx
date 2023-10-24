"use client";
import ModeSwitch from "./ModeSwitch";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme } = useTheme();

    return (
        <nav className="flex justify-between items-center">
            <Image
                src={
                    theme == "dark"
                        ? "/assets/alarado-icon-homepage-dark.svg"
                        : "/assets/alarado-icon-homepage.svg"
                }
                alt="Alarado Logo"
                width={200}
                height={50}
            />
            <ul className="flex gap-16">
                <li
                    className={`text-[#909193] ${
                        theme == "light"
                            ? "hover:text-[#111729]"
                            : "hover:text-white"
                    } hover:font-bold hover:cursor-pointer`}
                >
                    About us
                </li>
                <li
                    className={`text-[#909193] ${
                        theme == "light"
                            ? "hover:text-[#111729]"
                            : "hover:text-white"
                    } hover:font-bold hover:cursor-pointer`}
                >
                    Product
                </li>
                <li
                    className={`text-[#909193] ${
                        theme == "light"
                            ? "hover:text-[#111729]"
                            : "hover:text-white"
                    } hover:font-bold hover:cursor-pointer`}
                >
                    Resource
                </li>
                <li
                    className={`text-[#909193] ${
                        theme == "light"
                            ? "hover:text-[#111729]"
                            : "hover:text-white"
                    } hover:font-bold hover:cursor-pointer`}
                >
                    Contact
                </li>
            </ul>
            <ModeSwitch />
        </nav>
    );
}
