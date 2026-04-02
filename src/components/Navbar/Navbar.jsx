import { useState } from 'react';
import NavLinks from './NavLinks';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-(--bg-primary)">
      <div className="w-full px-4 sm:px-8 lg:px-40 py-4 lg:py-6.75 flex items-center justify-between">

        <a
          href="#home"
          className="text-xl lg:text-[28px] lg:leading-11.5 font-display text-(--text-primary) tracking-tight select-none"
        >
          Elementum
        </a>

        <NavLinks />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex flex-col justify-center items-end gap-1.5 sm:gap-1.25 lg:gap-[7.5px] border-none bg-transparent p-0 md:pointer-events-none md:cursor-default cursor-pointer"
        >
          <span className={`block h-[1.5px] w-5 sm:w-7 lg:w-11.25 bg-(--text-primary) transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-0.75 sm:translate-y-[3.5px] lg:rotate-0 lg:translate-y-0' : ''}`} />
          <span className={`block h-[1.5px] w-5 sm:w-7 lg:w-11.25 bg-(--text-primary) transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-0.75 sm:-translate-y-[3.5px] lg:rotate-0 lg:translate-y-0' : ''}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden bg-(--bg-primary) border-t border-(--border-primary) ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <NavLinks mobile onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
