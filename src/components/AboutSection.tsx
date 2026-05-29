import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} className="relative">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80"
            alt="AEROX engineering team at an industrial facility"
            className="h-[440px] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-7 left-6 rounded-2xl bg-primary p-6 text-white shadow-2xl sm:left-10">
            <p className="text-3xl font-black">500+</p>
            <p className="text-sm font-semibold text-blue-100">Completed assignments</p>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About AEROX"
            title="Engineering dependable infrastructure for growing enterprises"
            description="We combine field-tested execution, safety discipline, and practical engineering to help industrial clients build, maintain, and upgrade critical facilities."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-lg font-black text-primary">Our Mission</h3>
              <p className="mt-3 leading-7 text-slate-600">Deliver durable infrastructure with transparent processes, strong safety standards, and measurable project value.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-lg font-black text-primary">Our Vision</h3>
              <p className="mt-3 leading-7 text-slate-600">Become a preferred industrial partner for enterprises building future-ready operational capacity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
