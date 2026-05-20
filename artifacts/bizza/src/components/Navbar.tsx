import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-primary/20 py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoPath} alt="BIZZA" className="w-12 h-12 rounded-full object-cover border border-primary/30" />
          <span className="font-serif text-xl font-bold tracking-widest text-primary hidden sm:block">BIZZA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["menu", "experience", "story", "reserve"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              onMouseEnter={playHoverSound}
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("reserve")}
          onMouseEnter={playHoverSound}
          className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 text-sm uppercase tracking-widest"
        >
          Reserve a Table
        </button>
      </div>
    </motion.nav>
  );
};
