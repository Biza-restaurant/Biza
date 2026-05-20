import { useState } from "react";
import { motion } from "framer-motion";
import { playHoverSound } from "@/lib/audio";
import { useToast } from "@/hooks/use-toast";

export const Reservation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Reservation Confirmed",
        description: "Your table behind the golden doors awaits.",
        className: "border-primary bg-background text-foreground"
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="reserve" className="py-32 px-6 lg:px-12 bg-background relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-card/50 backdrop-blur-xl border border-primary/20 p-8 md:p-16 rounded-sm shadow-2xl shadow-black"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Request a Table</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Join the exclusive list</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary/80">Full Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-primary/30 py-2 text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary/80">Guests</label>
                <select className="w-full bg-background border-b border-primary/30 py-2 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>2 Persons</option>
                  <option>4 Persons</option>
                  <option>6 Persons</option>
                  <option>Private Dining</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary/80">Date</label>
                <input required type="date" className="w-full bg-transparent border-b border-primary/30 py-2 text-foreground focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary/80">Time</label>
                <input required type="time" className="w-full bg-transparent border-b border-primary/30 py-2 text-foreground focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-primary/80">Special Requests</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-primary/30 py-2 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={playHoverSound}
              className="w-full py-4 bg-primary text-background uppercase tracking-widest text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
