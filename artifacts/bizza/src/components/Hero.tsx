import { motion, useScroll, useTransform } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import videoBg from "@assets/AQNFOlvZwYc9SThlkc8ZNoIeMoyCTFU-VNjOwJRp3zJwgh-P60dZz9qxzLoZ_E_1779293062704.mp4";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src={videoBg}
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 mt-20"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-primary tracking-[0.35em] uppercase text-xs md:text-sm mb-8 font-light"
        >
          Where Luxury Meets Fire & Flavor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] leading-none font-bold mb-10 text-foreground drop-shadow-2xl"
        >
          BIZZA HISTOIRE
          <br />
          <span className="text-primary italic font-light">D'OR</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="w-24 h-px bg-primary mx-auto mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => scrollTo("menu")}
            onMouseEnter={playHoverSound}
            data-testid="button-explore-menu"
            className="px-10 py-4 bg-primary/10 backdrop-blur-md border border-primary/50 text-foreground hover:bg-primary hover:text-background transition-all duration-500 uppercase tracking-widest text-xs w-full sm:w-auto"
          >
            Explore Menu
          </button>
          <button
            onClick={() => scrollTo("reserve")}
            onMouseEnter={playHoverSound}
            data-testid="button-reserve-table"
            className="px-10 py-4 bg-transparent border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-500 uppercase tracking-widest text-xs w-full sm:w-auto"
          >
            Reserve a Table
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60">Scroll</span>
        <div className="w-px h-14 bg-primary/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["0%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
