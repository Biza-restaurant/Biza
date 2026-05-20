import { motion, AnimatePresence } from "framer-motion";

const videoBg = "/bizza-hero.mp4";

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
          className="fixed inset-0 z-[10000] overflow-hidden"
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover"
            src={videoBg}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
