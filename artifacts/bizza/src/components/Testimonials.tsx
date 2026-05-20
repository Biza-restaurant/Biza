import { motion } from "framer-motion";

const quotes = [
  { text: "Not a meal. A revelation. The truffles melt like butter while the gold flakes remind you exactly where you are.", author: "Vogue Gastronomy" },
  { text: "Bizza Histoire D'Or has ruined all other pizza for me. It is simply the pinnacle of culinary opulence.", author: "The Parisian Times" },
  { text: "A cinematic dining experience. The ambiance is matched only by the perfection of the crust.", author: "Michelin Guide Review" }
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#0a1520] relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-primary text-6xl font-serif leading-none block mb-4">"</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Words from the Elite</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col justify-between h-full"
            >
              <p className="font-serif text-xl text-muted-foreground italic mb-8 flex-grow">
                {q.text}
              </p>
              <div className="text-sm uppercase tracking-widest text-primary">
                — {q.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
