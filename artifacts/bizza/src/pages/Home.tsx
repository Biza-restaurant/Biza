import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

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
      
      {!isLoading && (
        <main className="opacity-0 animate-in fade-in duration-1000">
          <Navbar />
          <Hero />
          <Menu />
          <Experience />
          <ChefStory />
          <Testimonials />
          <Gallery />
          <Reservation />
          <Footer />
        </main>
      )}
    </div>
  );
}
