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
          <span className="text-sm">🛒</span>
          <span className="text-xs uppercase tracking-widest font-bold">Panier</span>
          <span className="w-5 h-5 rounded-full bg-background text-primary text-[10px] font-bold flex items-center justify-center">
            {totalItems}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
