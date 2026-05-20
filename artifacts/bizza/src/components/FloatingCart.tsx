import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export const FloatingCart = () => {
  const { totalItems, openCart } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openCart}
          className="fixed bottom-8 right-8 z-[80] flex items-center gap-3 bg-primary text-background px-5 py-3.5 shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span className="text-xs uppercase tracking-widest font-bold">Panier</span>
          <span className="w-5 h-5 rounded-full bg-background text-primary text-[10px] font-bold flex items-center justify-center">
            {totalItems}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
