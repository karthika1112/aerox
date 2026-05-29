import { motion } from "framer-motion";
import { industries } from "../data/siteData";
import Icon from "./Icon";
// ...existing code...

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-primary px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-300">Industries</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Built for demanding operating environments</h2>
          </div>
          <p className="leading-8 text-blue-100">
            Our delivery model adapts to complex sites, active operations, strict compliance needs, and aggressive business timelines.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-2 hover:bg-white hover:text-primary"
            >
              <div className="text-3xl text-accent">
                <Icon icon={industry.icon} />
              </div>
              <h3 className="mt-5 text-xl font-black">{industry.title}</h3>
              <p className="mt-3 leading-7 opacity-80">{industry.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
