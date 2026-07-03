import type { Page } from "../types";

type NavbarProps = {
    activePage: Page;
    setActivePage: (page: Page) => void;
};

function Navbar({ activePage, setActivePage }: NavbarProps) {
    const navItems: { label: string; page: Page }[] = [
        { label: "ABOUT ME", page: "about" },
        { label: "PROJECTS", page: "projects" },
    ];
    return (
        <nav
            className="sticky z-10 p-4 bg-black/35 backdrop-blur-md border-b border-white/8 shadow-[0_2px_30px_rgba(0,0,0,0.4)]"
        >
            <div className="mx-auto w-full max-w-3xl flex justify-between items-center">
                <h3>ELIJAH VILLANUEVA</h3>
                <div id="links" className="flex gap-9">
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
                    )
                    )}
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
