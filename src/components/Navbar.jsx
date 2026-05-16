import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full px-6 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <a href="#" className="font-bold text-xl font-[family-name:var(--font-display)]">
        Bhargav
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
        <a
              href="./resume.pdf"
          target="_blank"
          className="text-sm px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
        >
          Resume
        </a>
      </div>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-gray-800 md:hidden">
          <div className="flex flex-col items-center gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
          href="./resume.pdf"
              target="_blank"
              className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
