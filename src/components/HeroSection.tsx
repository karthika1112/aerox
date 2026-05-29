import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const ArrowRightIcon = FaArrowRight as unknown as React.ComponentType;
const CheckCircleIcon = FaCheckCircle as unknown as React.ComponentType<{ className?: string }>;

const circleImages = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-primary bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(10, 23, 78, 0.94), rgba(10, 23, 78, 0.78), rgba(230, 57, 70, 0.24)), url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <CheckCircleIcon className="text-accent" /> Trusted industrial project partner
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Premium Infrastructure Solutions Built for Performance
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            AEROX delivers construction, maintenance, and industrial facility solutions for enterprises that need reliability, safety, and speed at scale.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-bold text-white shadow-xl shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-600">
              Get a Quote <ArrowRightIcon />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-primary">
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden min-h-[420px] lg:block">
          {circleImages.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt="Industrial project preview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.12 }}
              className={`absolute rounded-full border-8 border-white/90 object-cover shadow-2xl ${
                index === 0
                  ? "left-10 top-4 h-64 w-64"
                  : index === 1
                  ? "right-10 top-24 h-52 w-52"
                  : "bottom-6 left-40 h-44 w-44"
              }`}
            />
          ))}
          <div className="absolute bottom-14 right-5 rounded-2xl bg-white p-6 shadow-2xl">
            <p className="text-4xl font-black text-primary">15+</p>
            <p className="mt-1 text-sm font-bold text-slate-500">Years of project excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
