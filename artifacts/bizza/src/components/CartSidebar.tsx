import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/menuData";

export const CartSidebar = () => {
  const { items, totalItems, totalPrice, isCartOpen, closeCart, removeItem, updateQty, openCheckout } = useCart();

  const scrollToMenu = () => {
    closeCart();
    setTimeout(() => {
      const el = document.getElementById("menu");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0f] border-l border-primary/20 z-[100] flex flex-col shadow-2xl shadow-black"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-primary/15">
              <div>
                <h2 className="font-serif text-xl text-foreground tracking-wide">Votre Commande</h2>
                <p className="text-primary/60 text-xs uppercase tracking-widest mt-0.5">
                  {totalItems} {totalItems === 1 ? "article" : "articles"}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 flex items-center justify-center border border-foreground/10 hover:border-primary/50 text-foreground/40 hover:text-primary transition-all rounded-sm"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-1 scrollbar-thin">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <p className="text-foreground/40 text-sm uppercase tracking-widest">Votre panier est vide</p>
                  <button
                    onClick={scrollToMenu}
                    className="mt-2 px-6 py-2.5 border border-primary/40 text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    ← Voir le Menu
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-3 py-4 border-b border-foreground/5"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground text-sm font-light leading-snug">{item.name}</p>
                        <p className="text-primary/70 text-xs mt-0.5 tracking-wider">{formatPrice(item.price)}</p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-foreground/20 hover:border-primary text-foreground/60 hover:text-primary text-sm transition-all flex items-center justify-center"
                        >
                          −
                        </button>
                        <span className="text-foreground text-sm w-5 text-center font-light">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-foreground/20 hover:border-primary text-foreground/60 hover:text-primary text-sm transition-all flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0 min-w-[72px]">
                        <p className="text-foreground/80 text-sm font-serif">{formatPrice(item.price * item.quantity)}</p>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => removeItem(item.id)}
                          title="Supprimer"
                          className="w-6 h-6 flex items-center justify-center border border-red-400/20 hover:border-red-400/60 text-red-400/40 hover:text-red-400 transition-all rounded-sm text-xs"
                        >
                          🗑
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-primary/15 space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-foreground/50 text-xs uppercase tracking-widest">Total</span>
                  <span className="font-serif text-xl text-primary">{formatPrice(totalPrice)}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={openCheckout}
                  className="w-full py-4 bg-primary text-background uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-colors"
                >
                  Passer la Commande →
                </motion.button>
                <button
                  onClick={scrollToMenu}
                  className="w-full py-3 border border-foreground/10 hover:border-primary/40 text-foreground/40 hover:text-primary/80 text-xs uppercase tracking-widest transition-all duration-300"
                >
                  ← Continuer les Achats
                </button>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
