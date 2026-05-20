import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";

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
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "brightness(0)" }}
            animate={{ scale: 1, opacity: 1, filter: "brightness(1) drop-shadow(0 0 20px rgba(198,167,105,0.5))" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={logoPath} alt="BIZZA Logo" className="w-48 h-48 object-contain rounded-full" />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-px bg-primary mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
