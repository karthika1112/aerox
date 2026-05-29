import { motion } from "framer-motion";
import { features } from "../data/siteData";
import Icon from "./Icon";

const FeaturesSection = () => {
  return (
    <section className="relative z-10 bg-slate-50 px-5 pb-16 sm:px-8">
      <div className="mx-auto -mt-20 grid max-w-7xl gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="group rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/70 transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-2xl text-accent transition group-hover:bg-accent group-hover:text-white">
              <Icon icon={feature.icon} />
            </div>
            <h3 className="mt-6 text-xl font-black text-primary">{feature.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
