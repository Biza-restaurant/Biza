import { motion } from "framer-motion";
import chefImg from "@/assets/chef.png";
import extImg from "@/assets/exterior.png";

export const ChefStory = () => {
  return (
    <section id="story" className="py-32 px-6 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] max-w-md mx-auto"
            >
              <img src={chefImg} alt="Master Chef" className="w-full h-full object-cover filter contrast-125 saturate-110" />
              <div className="absolute -inset-4 border border-primary/30 -z-10 translate-x-4 translate-y-4" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-primary tracking-widest uppercase text-sm mb-4 block">The Artisan</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Crafting Edible <br/> <span className="italic text-primary">Masterpieces</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed mb-12">
                <p>
                  "We don't just bake pizza. We forge an experience. Every ingredient is sourced from the finest terroirs, every flame is controlled to absolute precision."
                </p>
                <p>
                  Behind the golden doors lies a dedication to the craft that borders on obsession. Welcome to Paris 2035, where the past and future of gastronomy collide.
                </p>
              </div>

              <div className="relative h-64 overflow-hidden group">
                <img src={extImg} alt="Restaurant Exterior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center border border-primary/20">
                  <span className="font-serif text-xl tracking-widest text-primary">The Sanctuary</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
