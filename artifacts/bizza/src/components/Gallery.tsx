import { motion } from "framer-motion";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import food6 from "@/assets/food-6.jpg";
import food7 from "@/assets/food-7.jpg";
import food8 from "@/assets/food-8.jpg";
import { SiInstagram } from "react-icons/si";

const images = [food1, food2, food3, food4, food5, food6, food7, food8];

export const Gallery = () => {
  return (
    <section className="py-2 bg-background">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-2">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative aspect-[4/5] group overflow-hidden cursor-pointer bg-zinc-900"
          >
            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
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
