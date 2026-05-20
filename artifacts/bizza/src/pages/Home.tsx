import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Experience } from "@/components/Experience";
import { ChefStory } from "@/components/ChefStory";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsLoading(false), 2500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-background">
      <CustomCursor />
      <ScrollProgress />
      <LoadingScreen isLoading={isLoading} />

      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <Menu />
            <Experience />
            <ChefStory />
            <Testimonials />
            <Gallery />
            <Reservation />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
