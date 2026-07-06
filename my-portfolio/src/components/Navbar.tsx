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
        { label: "ABOUT ME", page: "about" },
        { label: "PROJECTS", page: "projects" },
    ];

    return (
        <nav className="sticky top-0 z-10 border-b border-white/8 bg-black/35 p-4 shadow-[0_2px_30px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
                <h3>ELIJAH VILLANUEVA</h3>

                {/* Desktop nav */}
                <div id="links" className="flex gap-9 max-[600px]:hidden">
                    {navItems.map((item) => (
                        <button
                            key={item.page}
                            onClick={() => setActivePage(item.page)}
                            className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-300 ${activePage === item.page
                                    ? "bg-white/20 text-black"
                                    : "text-black hover:bg-white/10"
                                }`}
                        >
                            {item.label}
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
                            className={`cursor-pointer rounded-xl px-4 py-3 text-left transition-all duration-300 ${activePage === item.page
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