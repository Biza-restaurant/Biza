import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import { useCart } from "@/context/CartContext";
import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";

const LuxuryCartButton = ({ totalItems, openCart }: { totalItems: number; openCart: () => void }) => {
  const [pulse, setPulse] = useState(false);
  const prevCount = useRef(totalItems);

  useEffect(() => {
    if (totalItems > prevCount.current) {
      setPulse(true);
      setTimeout(() => setPulse(false), 700);
    }
    prevCount.current = totalItems;
  }, [totalItems]);

  return (
    <button
      onClick={() => { openCart(); playHoverSound(); }}
      aria-label="Open cart"
      style={{
        position: "relative",
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 30%, rgba(30,70,140,0.95) 0%, rgba(8,22,58,0.98) 70%)",
        boxShadow: pulse
          ? "0 0 0 2px #c9a84c, 0 0 28px 10px rgba(201,168,76,0.75), 0 0 50px 15px rgba(201,168,76,0.3), inset 0 1px 2px rgba(255,255,255,0.18)"
          : totalItems > 0
          ? "0 0 0 1.5px #c9a84c, 0 0 18px 6px rgba(201,168,76,0.55), 0 0 35px 10px rgba(201,168,76,0.2), inset 0 1px 1px rgba(255,255,255,0.12)"
          : "0 0 0 1.5px rgba(201,168,76,0.6), 0 0 12px 3px rgba(201,168,76,0.25), inset 0 1px 1px rgba(255,255,255,0.08)",
        transition: "box-shadow 0.4s ease",
        cursor: "pointer",
        border: "none",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Outer gold ring */}
      <span style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.5)",
        pointerEvents: "none",
      }} />

      {/* Dining icon — plate + fork + knife */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Plate circle */}
        <circle cx="12" cy="12" r="4"/>
        {/* Fork on left */}
        <line x1="5" y1="3" x2="5" y2="8"/>
        <path d="M3 3v3a2 2 0 0 0 4 0V3"/>
        <line x1="5" y1="8" x2="5" y2="21"/>
        {/* Knife on right */}
        <path d="M19 3v5c0 1.1-.9 2-2 2v11"/>
        <path d="M17 3h2"/>
      </svg>

      {/* Count badge */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key={totalItems}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 30%, #e2c06e, #a87828)",
              boxShadow: "0 0 6px 2px rgba(201,168,76,0.5)",
              color: "#0a0a0f",
              fontSize: 9,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "0.02em",
              fontFamily: "serif",
            }}
          >
            {totalItems}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulse ring on add */}
      <AnimatePresence>
        {pulse && (
          <motion.span
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 1.9, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1.5px solid #c9a84c",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </button>
  );
};

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
    if (el) el.scrollIntoView({ behavior: "smooth" });
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

        <LuxuryCartButton totalItems={totalItems} openCart={openCart} />
      </div>
    </motion.nav>
  );
};
