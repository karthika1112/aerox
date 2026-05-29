import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, description, align = "center" }: SectionHeaderProps) => {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </motion.div>
  );
};

export default SectionHeader;
