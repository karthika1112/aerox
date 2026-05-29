import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBuilding,
  FaChartLine,
  FaFacebookF,
  FaHardHat,
  FaIndustry,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaOilCan,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
  FaTruckMoving,
  FaTwitter,
  FaWarehouse,
} from "react-icons/fa";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface CardItem {
  title: string;
  description: string;
  icon: IconType;
}

export interface ImageItem {
  title: string;
  image: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

export const features: CardItem[] = [
  {
    title: "Higher Productivity",
    description: "Lean project planning, skilled teams, and modern tools keep critical work moving on schedule.",
    icon: FaChartLine,
  },
  {
    title: "Safety First",
    description: "Certified procedures and site controls help protect people, equipment, and operating assets.",
    icon: FaShieldAlt,
  },
  {
    title: "Cost Reduction",
    description: "Smarter procurement and lifecycle planning reduce waste without compromising quality.",
    icon: FaBolt,
  },
];

export const services: CardItem[] = [
  {
    title: "Industrial Construction",
    description: "Turnkey civil, structural, and mechanical execution for demanding industrial environments.",
    icon: FaIndustry,
  },
  {
    title: "Plant Maintenance",
    description: "Preventive and corrective maintenance programs designed for uptime and compliance.",
    icon: FaTools,
  },
  {
    title: "Logistics Infrastructure",
    description: "Warehouse, yard, and movement systems planned for speed, safety, and scale.",
    icon: FaTruckMoving,
  },
  {
    title: "Facility Development",
    description: "Modern facilities with strong foundations, clean workflows, and durable finishes.",
    icon: FaBuilding,
  },
  {
    title: "Safety Consulting",
    description: "Risk audits, safety documentation, and operational controls for complex sites.",
    icon: FaHardHat,
  },
  {
    title: "Asset Optimization",
    description: "Practical upgrades that improve performance, reduce downtime, and extend service life.",
    icon: FaWarehouse,
  },
];

export const industries: CardItem[] = [
  {
    title: "Manufacturing",
    description: "Reliable support for production floors, utilities, and expansion projects.",
    icon: FaIndustry,
  },
  {
    title: "Energy & Utilities",
    description: "Infrastructure services for power, water, and essential operating networks.",
    icon: FaBolt,
  },
  {
    title: "Oil & Gas",
    description: "Field-ready teams for high-standard industrial and process environments.",
    icon: FaOilCan,
  },
  {
    title: "Warehousing",
    description: "Efficient spaces built for storage density, movement, and long-term durability.",
    icon: FaWarehouse,
  },
];

export const galleryImages: ImageItem[] = [
  {
    title: "Industrial Plant",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Steel Structure",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warehouse Facility",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Construction Site",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Engineering Team",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Logistics Yard",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
  },
];

export const contactDetails = [
  { label: "Address", value: "AEROX Industrial Park, Sector 18, Hyderabad, India", icon: FaMapMarkerAlt },
  { label: "Email", value: "contact@aeroxinfra.com", icon: FaBuilding },
  { label: "Phone", value: "+91 98765 43210", icon: FaPhoneAlt },
];
