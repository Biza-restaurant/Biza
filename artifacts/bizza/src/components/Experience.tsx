import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import expBg from "@/assets/experience-bg.webp";

const Counter = ({ value, suffix, title }: { value: number, suffix: string, title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView && ref.current) {
      const el = ref.current.querySelector('.number') as HTMLElement;
      gsap.to(el, {
        innerHTML: value,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.out"
      });
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-7xl text-primary mb-2 flex items-center justify-center">
        <span>+</span>
        <span className="number">0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm uppercase tracking-widest text-foreground/70">{title}</div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${expBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">A Legacy of Grandeur</h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            Every moment inside Bizza Histoire D'Or is curated for those who seek the extraordinary.
            From the ambient gold lighting to the masterpiece dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          <Counter value={50} suffix="" title="Luxury Recipes" />
          <Counter value={10} suffix="" title="Master Chefs" />
          <Counter value={100} suffix="K" title="Happy Clients" />
        </div>
      </div>
    </section>
  );
};
