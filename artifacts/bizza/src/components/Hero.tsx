import { motion, useScroll, useTransform } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import heroBg from "@/assets/hero-bg.png";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-6 mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary tracking-[0.3em] uppercase text-sm mb-6"
        >
          Where Luxury Meets Fire & Flavor
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold mb-10 text-foreground drop-shadow-2xl"
        >
          BIZZA HISTOIRE<br/>
          <span className="text-primary italic font-light">D'OR</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => scrollTo("menu")}
            onMouseEnter={playHoverSound}
            className="px-8 py-4 bg-primary/10 backdrop-blur-md border border-primary/50 text-foreground hover:bg-primary hover:text-background transition-all duration-500 uppercase tracking-widest text-sm w-full sm:w-auto"
          >
            Explore Menu
          </button>
          <button
            onClick={() => scrollTo("reserve")}
            onMouseEnter={playHoverSound}
            className="px-8 py-4 bg-transparent border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-500 uppercase tracking-widest text-sm w-full sm:w-auto"
          >
            Reserve a Table
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-primary/70">Scroll</span>
        <div className="w-px h-12 bg-primary/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["0%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
