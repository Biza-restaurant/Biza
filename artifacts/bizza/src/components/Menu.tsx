import { motion } from "framer-motion";
import { useState } from "react";
import { playHoverSound } from "@/lib/audio";
import { categories, menuItems, formatPrice } from "@/lib/menuData";
import { useCart } from "@/context/CartContext";

export const Menu = () => {
  const [active, setActive] = useState("plats");
  const { addItem, items } = useCart();

  const visibleItems = menuItems.filter((i) => i.categoryId === active);
  const currentCat = categories.find((c) => c.id === active)!;

  const getQty = (id: string) => items.find((i) => i.id === id)?.quantity ?? 0;

  return (
    <section id="menu" className="py-32 px-6 lg:px-12 bg-background relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] uppercase text-xs mb-4"
          >
            Notre Carte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Le Menu
          </motion.h2>
          <div className="h-px w-24 bg-primary mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={playHoverSound}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                active === cat.id
                  ? "bg-primary text-background border-primary"
                  : "bg-transparent text-foreground/60 border-foreground/20 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">{currentCat.title}</h3>
            <p className="text-primary/60 text-sm mt-1 tracking-widest">{currentCat.subtitle}</p>
          </div>

          <div className="divide-y divide-primary/10">
            {visibleItems.map((item, idx) => {
              const qty = getQty(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="flex items-center justify-between py-5 group"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors text-sm md:text-base font-light tracking-wide">
                      {item.name}
                    </span>
                    {qty > 0 && (
                      <span className="ml-3 text-[10px] uppercase tracking-widest text-primary/70 bg-primary/10 px-2 py-0.5 rounded-sm">
                        ×{qty} ajouté
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-primary font-serif text-sm md:text-base">
                      {formatPrice(item.price)}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => { addItem(item); playHoverSound(); }}
                      className="w-8 h-8 border border-primary/40 hover:bg-primary hover:border-primary text-primary hover:text-background text-lg flex items-center justify-center transition-all duration-200"
                    >
                      +
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
