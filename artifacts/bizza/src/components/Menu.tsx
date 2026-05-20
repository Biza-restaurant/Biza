import { motion } from "framer-motion";
import { useState } from "react";
import { playHoverSound } from "@/lib/audio";

const categories = [
  {
    id: "entrees",
    title: "Entrées du Monde",
    subtitle: "المقبلات",
    items: [
      { name: "Crème de Potiron", price: "400 DA" },
      { name: "Bisque de Crevette", price: "500 DA" },
      { name: "Bourek Crevette (2 Pièces)", price: "550 DA" },
      { name: "Vitello Tonné", price: "1 150 DA" },
      { name: "Ceviché Daurade / Avocat", price: "1 800 DA" },
      { name: "Tartare Avocat au Saumon", price: "1 900 DA" },
    ],
  },
  {
    id: "soupes",
    title: "Soupes",
    subtitle: "الشوربات",
    items: [
      { name: "Soupe de Poisson", price: "600 DA" },
    ],
  },
  {
    id: "poissons",
    title: "Escale Poisson",
    subtitle: "محطة الأسماك",
    items: [
      { name: "Daurade en Portefeuille", price: "1 600 DA" },
      { name: "Paget à la Plancha", price: "1 600 DA" },
      { name: "Spaghetti aux Crevettes", price: "1 600 DA" },
      { name: "Sepia en Sauce", price: "1 800 DA" },
      { name: "Saumon à la Plancha", price: "2 200 DA" },
      { name: "Espadon à la Palermitaine", price: "2 400 DA" },
      { name: "Espadon à la Braise", price: "2 400 DA" },
      { name: "Saumon Sauce Dieppoise", price: "2 400 DA" },
      { name: "Crevette à la Provençale", price: "2 400 DA" },
      { name: "Crevette à la Braise", price: "2 400 DA" },
      { name: "Crevette Sautée à l'Ail", price: "2 400 DA" },
    ],
  },
  {
    id: "plats",
    title: "Les Plats Principaux",
    subtitle: "الأطباق الرئيسية",
    items: [
      { name: "Aadja Mergaz", price: "1 100 DA" },
      { name: "Côte d'Agneau Merguez", price: "1 100 DA" },
      { name: "Tavuk Sis", price: "1 200 DA" },
      { name: "Köfte Tavuk Sis", price: "1 200 DA" },
      { name: "Wok de Bœuf", price: "1 400 DA" },
      { name: "Poulet au Citron Confit", price: "1 400 DA" },
      { name: "Poulet Tikka Massala", price: "1 600 DA" },
      { name: "Dina Sis Kebab", price: "1 600 DA" },
      { name: "Kuzu Sis Kebab", price: "1 600 DA" },
      { name: "Fettuccine au Saumon", price: "1 600 DA" },
      { name: "Lapin à l'Espagnole", price: "1 800 DA" },
      { name: "Tadjine Zuzu", price: "2 000 DA" },
      { name: "Tadjine Poisson", price: "2 400 DA" },
      { name: "Bœuf Stroganov", price: "2 400 DA" },
      { name: "Blanquette de Bœuf", price: "2 400 DA" },
      { name: "Méchoui Maison", price: "2 500 DA" },
      { name: "Juge d'Agneau Farcie", price: "2 800 DA" },
    ],
  },
];

export const Menu = () => {
  const [active, setActive] = useState("entrees");

  const current = categories.find((c) => c.id === active)!;

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
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">{current.title}</h3>
            <p className="text-primary/60 text-sm mt-1 tracking-widest">{current.subtitle}</p>
          </div>

          <div className="divide-y divide-primary/10">
            {current.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="flex items-center justify-between py-5 group"
              >
                <span className="text-foreground/80 group-hover:text-foreground transition-colors text-sm md:text-base font-light tracking-wide">
                  {item.name}
                </span>
                <span className="text-primary font-serif text-sm md:text-base ml-6 shrink-0">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
