import { motion } from "framer-motion";
import { services } from "../data/siteData";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Specialized support for industrial growth"
          description="From construction to optimization, our teams support every stage of infrastructure delivery and long-term facility performance."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-2xl hover:ring-red-100"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-2xl text-white transition group-hover:rotate-3 group-hover:bg-accent">
                <Icon icon={service.icon} />
              </div>
              <h3 className="mt-6 text-xl font-black text-primary">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
