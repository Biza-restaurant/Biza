import { motion } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import menu1 from "@/assets/menu-1.png";
import menu2 from "@/assets/menu-2.png";
import menu3 from "@/assets/menu-3.png";
import menu4 from "@/assets/menu-4.png";
import menu5 from "@/assets/menu-5.png";

const items = [
  {
    category: "Golden Truffle Collection",
    name: "Signature Truffle Black",
    desc: "Black slate dough, rare black truffles, 24k gold leaf, aged parmesan.",
    price: "€120",
    img: menu1
  },
  {
    category: "Royal Cheese",
    name: "Four-Cheese Royal",
    desc: "Aged gorgonzola, mozzarella di bufala, wild honey drizzle, edible flowers.",
    price: "€85",
    img: menu2
  },
  {
    category: "Signature Pizza",
    name: "Seafood Gold Caviar",
    desc: "Beluga caviar, lobster, saffron infused crust, chive essence.",
    price: "€250",
    img: menu3
  },
  {
    category: "Luxury Desserts",
    name: "Chocolate Lava Gold",
    desc: "Valrhona dark chocolate, molten core, gold dust dusting.",
    price: "€45",
    img: menu4
  },
  {
    category: "Vintage Drinks",
    name: "Bizza Reserve Red",
    desc: "1982 Vintage Bordeaux, decanted tableside.",
    price: "€300",
    img: menu5
  }
];

export const Menu = () => {
  return (
    <section id="menu" className="py-32 px-6 lg:px-12 bg-background relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">The Culinary Collection</h2>
          <div className="h-px w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-500 z-20" />
              </div>
              <div className="mt-8 text-center relative z-20">
                <span className="text-xs tracking-widest uppercase text-primary/70 mb-2 block">{item.category}</span>
                <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4 px-4">{item.desc}</p>
                <span className="inline-block px-4 py-1 border border-primary text-primary text-sm font-serif tracking-widest">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
