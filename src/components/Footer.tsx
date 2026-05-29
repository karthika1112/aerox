import { navLinks, socialLinks } from "../data/siteData";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-lg font-black text-white">AX</span>
            <div>
              <p className="text-xl font-black">AEROX</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Infrastructure</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Premium infrastructure and industrial support for companies building safer, stronger, and more efficient operations.
          </p>
        </div>

        <div>
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-400 transition hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black">Follow Us</h3>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-accent">
                <Icon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        Copyright © 2026 AEROX Infrastructure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
