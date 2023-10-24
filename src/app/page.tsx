import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
    return (
        <main className="p-5">
            <Navbar />
            <section className="py-12 px-32 mt-10 flex justify-between items-center w-full">
                <div className="flex flex-col justify-center gap-5 max-w-md">
                    <p className="text-lg">😎 Simple way to communicate</p>
                    <h1 className="text-6xl font-bold leading-normal">
                        Actions for Accessibility in Design
                    </h1>
                    <h3 className="text-lg text-[#909193]">
                        The fastest way to build and deploy websites with
                        resusable components.
                    </h3>
                    <div className="mt-10 flex items-center gap-5">
                        <Button variant={"violet"}>Get Started</Button>
                        <Button variant={"link"}>Get live demo</Button>
                    </div>
                    <div className="mt-10 flex items-center gap-5">
                        <p>No credit card required</p>
                        <p>No software to install</p>
                    </div>
                </div>
                <div>
                    <img
                        src="/assets/hero-image-simple-homepage.png"
                        alt=""
                        width={800}
                    />
                </div>
            </section>
        </main>
    );
}
