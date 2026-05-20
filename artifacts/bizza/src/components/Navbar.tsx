import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import { useCart } from "@/context/CartContext";
import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
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
          <img src={logoPath} alt="BIZA" className="w-16 h-16 rounded-full object-cover border border-primary/30" />
          <span className="font-serif text-xl font-bold tracking-widest text-primary">BIZA</span>
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

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            onMouseEnter={playHoverSound}
            className="relative p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-background text-[9px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => scrollTo("reserve")}
            onMouseEnter={playHoverSound}
            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Commander en ligne
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
