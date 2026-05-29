import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../data/siteData";

const BarsIcon = FaBars as unknown as React.ComponentType;
const TimesIcon = FaTimes as unknown as React.ComponentType;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-lg font-black text-white">
            AX
          </span>
          <span>
            <span className="block text-xl font-black leading-none text-primary">AEROX</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Infrastructure</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-bold text-slate-700 transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-primary lg:hidden"
        >
          {open ? <TimesIcon /> : <BarsIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
