import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";
import videoBg from "@assets/AQNFOlvZwYc9SThlkc8ZNoIeMoyCTFU-VNjOwJRp3zJwgh-P60dZz9qxzLoZ_E_1779293062704.mp4";

interface Props {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: Props) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover"
            src={videoBg}
          />
          <div className="absolute inset-0 bg-background/60" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.img
              src={logoPath}
              alt="BIZZA Logo"
              initial={{ scale: 0.8, opacity: 0, filter: "brightness(0)" }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "brightness(1) drop-shadow(0 0 30px rgba(198,167,105,0.7))",
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-40 h-40 object-contain rounded-full border border-primary/40"
            />

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-px bg-primary"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-primary/80 text-xs uppercase tracking-[0.4em] font-light"
            >
              Where Luxury Meets Fire & Flavor
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
