import { motion } from "framer-motion";
import { galleryImages } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="A closer look at industrial execution"
          description="Dummy project visuals that show the type of environments, facilities, and site work represented by the AEROX brand."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative h-72 overflow-hidden rounded-2xl bg-slate-200 shadow-lg"
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 to-transparent p-6 pt-20">
                <p className="text-lg font-black text-white">{item.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
