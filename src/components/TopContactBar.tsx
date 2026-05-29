import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import { socialLinks } from "../data/siteData";
import Icon from "./Icon";

const PhoneIcon = FaPhoneAlt as unknown as React.ComponentType<{ className?: string }>;
const DownloadIcon = FaDownload as unknown as React.ComponentType;
const TopContactBar = () => {
  return (
    <div className="hidden bg-primary text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 text-sm">
        <div className="flex items-center gap-6 text-blue-100">
          <span className="flex items-center gap-2">
            <PhoneIcon className="text-accent" /> +91 98765 43210
          </span>
          <span className="flex items-center gap-2">
            <PhoneIcon className="text-accent" /> +91 91234 56789
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label} className="text-blue-100 transition hover:text-accent">
              <Icon icon={social.icon} />
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-semibold text-white transition hover:bg-red-600">
            <DownloadIcon /> Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
