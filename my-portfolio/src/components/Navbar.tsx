function Navbar() {
    return (
        <nav 
            className="sticky z-10 flex p-8 pl-10 pr-10 justify-between items-center bg-black/35 backdrop-blur-md border-b border-white/8 shadow-[0_2px_30px_rgba(0,0,0,0.4)]"
        >
            <div id="socials">
                <h3>ELIJAH VILLANUEVA</h3>
            </div>
            <div id="links" className="flex gap-12">
                <h3>ABOUT ME</h3>
                <h3>PROJECTS</h3>
                <h3>CONTACT</h3>
            </div>
        </nav>
    );
}

export default Navbar;
