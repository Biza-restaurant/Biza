import { motion } from "framer-motion";
import gal1 from "@/assets/gallery-1.webp";
import gal2 from "@/assets/gallery-2.webp";
import menu1 from "@/assets/menu-1.webp";
import menu2 from "@/assets/menu-2.webp";
import menu3 from "@/assets/menu-3.webp";
import menu5 from "@/assets/menu-5.webp";
import { SiInstagram } from "react-icons/si";

const images = [gal1, menu1, gal2, menu2, menu3, menu5];

export const Gallery = () => {
  return (
    <section className="py-2 bg-background">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-2">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative aspect-square group overflow-hidden cursor-pointer"
          >
            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <SiInstagram className="text-primary text-3xl" />
            </div>
            <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-500 m-2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
