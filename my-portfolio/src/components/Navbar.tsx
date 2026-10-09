import type { Page } from "../types";
import { useState } from "react";
import { Icon } from "@iconify/react";

type NavbarProps = {
    activePage: Page;
    setActivePage: (page: Page) => void;
};
function Navbar({ activePage, setActivePage }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems: { label: string; page: Page }[] = [
        { label: "About", page: "about" },
        { label: "Projects", page: "projects" },
    ];

    return (
        <nav className="sticky top-0 z-10 bg-gray-300 p-4">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
                <h1 className="text-4xl">Elijah Villanueva</h1>

                {/* Desktop nav */}
                <div id="links" className="flex gap-9 max-[600px]:hidden">
                    {navItems.map((item) => (
                        <button
                            key={item.page}
                            onClick={() => setActivePage(item.page)}
                            className={`relative cursor-pointer px-4 py-2 text-black transition-all duration-300
                                after:absolute after:bottom-1 after:left-4 after:h-0.5 after:bg-black
                                after:transition-all after:duration-300 after:ease-out
                                ${activePage === item.page
                                    ? "after:w-[calc(100%-2rem)]"
                                    : "after:w-0 hover:after:w-[calc(100%-2rem)] hover:after:bg-black/40"
                                }`}
                        >
                            <h2>{item.label}</h2>
                        </button>
                    ))}
                </div>

                {/* Mobile/600px> nav (Collapsed) */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="hidden cursor-pointer p-2 transition-all duration-300 hover:bg-white/20 max-[600px]:flex"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <Icon
                        icon="material-symbols:menu"
                        className="size-6"
                    />
                </button>
            </div>

            {/* Mobile dropdown links */}
            {isMenuOpen && (
                <div className="mx-auto mt-4 hidden w-full max-w-3xl flex-col gap-2 max-[600px]:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.page}
                            onClick={() => {
                                setActivePage(item.page);
                                setIsMenuOpen(false);
                            }}
                            className={`cursor-pointer rounded-xl px-4 py-3 text-left font-sans transition-all text-22 font-bold duration-300 ${activePage === item.page
                                ? "bg-white/20 text-black"
                                : "text-black hover:bg-white/10"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;