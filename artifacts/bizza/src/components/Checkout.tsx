import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/menuData";
import { useToast } from "@/hooks/use-toast";

export const Checkout = () => {
  const { items, totalPrice, totalItems, isCheckoutOpen, closeCheckout, clearCart } = useCart();
  const { toast } = useToast();
  const [step, setStep] = useState<"form" | "confirm" | "done">("form");
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Requis";
    if (!form.phone.trim() || !/^0[5-7]\d{8}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Numéro invalide (ex: 0555123456)";
    if (!form.address.trim()) e.address = "Requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setStep("confirm");
  };

  const handleConfirm = () => {
    setStep("done");
    setTimeout(() => {
      closeCheckout();
      clearCart();
      setStep("form");
      setForm({ name: "", phone: "", address: "", note: "" });
      toast({
        title: "Commande envoyée !",
        description: "Nous vous contacterons sous peu pour confirmer.",
        className: "border-primary bg-background text-foreground",
      });
    }, 2800);
  };

  const field = (
    label: string,
    key: keyof typeof form,
    type = "text",
    placeholder = ""
  ) => (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.2em] text-primary/70">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => { setForm((f) => ({ ...f, [key]: e.target.value })); setErrors((er) => ({ ...er, [key]: undefined })); }}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b py-2.5 text-foreground text-sm placeholder:text-foreground/20 focus:outline-none transition-colors ${errors[key] ? "border-red-400/70" : "border-foreground/15 focus:border-primary"}`}
      />
      {errors[key] && <p className="text-red-400/80 text-[10px] tracking-widest">{errors[key]}</p>}
    </div>
  );

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => step === "form" && closeCheckout()}
          />

          <motion.div
            className="relative z-10 w-full max-w-3xl bg-[#07070d] border border-primary/20 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <AnimatePresence mode="wait">
              {step === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 px-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-20 h-20 rounded-full border border-primary flex items-center justify-center text-3xl mb-8"
                  >
                    ✓
                  </motion.div>
                  <h2 className="font-serif text-3xl text-foreground mb-3">Commande Confirmée</h2>
                  <p className="text-foreground/40 text-sm tracking-widest uppercase">
                    Merci {form.name} — nous vous appelons bientôt
                  </p>
                </motion.div>
              ) : step === "confirm" ? (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="p-8 md:p-12"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-1">Confirmer la Commande</h2>
                  <p className="text-foreground/35 text-xs uppercase tracking-widest mb-8">Vérifiez avant d'envoyer</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-3">Vos coordonnées</p>
                      <p className="text-foreground/80 text-sm">{form.name}</p>
                      <p className="text-foreground/80 text-sm">{form.phone}</p>
                      <p className="text-foreground/80 text-sm">{form.address}</p>
                      {form.note && <p className="text-foreground/50 text-xs italic">"{form.note}"</p>}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-3">Votre panier ({totalItems})</p>
                      <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-foreground/60 truncate mr-3">{item.quantity}× {item.name}</span>
                            <span className="text-foreground/50 shrink-0">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4 pt-3 border-t border-primary/15">
                        <span className="text-xs uppercase tracking-widest text-foreground/40">Total</span>
                        <span className="font-serif text-lg text-primary">{formatPrice(totalPrice)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep("form")}
                      className="flex-1 py-3.5 border border-foreground/15 text-foreground/50 hover:text-foreground hover:border-foreground/30 text-xs uppercase tracking-widest transition-all"
                    >
                      ← Modifier
                    </button>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={handleConfirm}
                      className="flex-[2] py-3.5 bg-primary text-background text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-colors"
                    >
                      Envoyer la Commande ✓
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="grid md:grid-cols-[1fr_340px]"
                >
                  <div className="p-8 md:p-12 border-r border-primary/10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-1">Finaliser la Commande</h2>
                        <p className="text-foreground/35 text-xs uppercase tracking-widest">Livraison à domicile</p>
                      </div>
                      <button
                        onClick={closeCheckout}
                        className="w-8 h-8 flex items-center justify-center border border-foreground/10 hover:border-primary/40 text-foreground/30 hover:text-primary/70 text-xs transition-all"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-7">
                      {field("Nom complet", "name", "text", "Votre nom")}
                      {field("Téléphone", "phone", "tel", "0555 123 456")}
                      {field("Adresse de livraison", "address", "text", "Rue, quartier, ville...")}

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-primary/70">Note (optionnel)</label>
                        <textarea
                          rows={2}
                          value={form.note}
                          onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                          placeholder="Précisions, allergies, instructions..."
                          className="w-full bg-transparent border-b border-foreground/15 focus:border-primary py-2 text-foreground text-sm placeholder:text-foreground/20 focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      className="w-full mt-10 py-4 bg-primary text-background text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-colors"
                    >
                      Continuer →
                    </motion.button>
                  </div>

                  <div className="hidden md:flex flex-col bg-black/30 p-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary/50 mb-6">
                      Récapitulatif — {totalItems} article{totalItems > 1 ? "s" : ""}
                    </p>
                    <div className="flex-1 space-y-3 overflow-y-auto pr-1 scrollbar-thin">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between gap-2">
                          <div className="min-w-0">
                            <span className="text-foreground/55 text-xs leading-relaxed block">{item.name}</span>
                            <span className="text-foreground/30 text-[10px]">× {item.quantity}</span>
                          </div>
                          <span className="text-foreground/50 text-xs shrink-0">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-5 mt-4 border-t border-primary/15">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] uppercase tracking-widest text-foreground/30">Total</span>
                        <span className="font-serif text-2xl text-primary">{formatPrice(totalPrice)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
