import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fallbackImg from "@/assets/exterior.png";

interface Props {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;

    const tryPlay = () => {
      v.play().catch(() => setVideoFailed(true));
    };

    const onError = () => setVideoFailed(true);
    const onCanPlay = () => tryPlay();

    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("error", onError);
    tryPlay();

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("error", onError);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] overflow-hidden bg-[#050810]"
        >
          {videoFailed ? (
            <img
              src={fallbackImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              poster={fallbackImg}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setVideoFailed(true)}
            >
              <source
                src="https://res.cloudinary.com/dlazeylfu/video/upload/q_auto,f_auto/0520_tq0zfn.mp4"
                type="video/mp4"
              />
            </video>
          )}

          <div className="absolute inset-0 bg-background/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-serif text-4xl md:text-6xl text-foreground tracking-[0.2em]"
            >
              BIZA
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-primary text-xs uppercase tracking-[0.4em]"
            >
              Histoire D'Or
            </motion.p>
            <div className="flex gap-1.5 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
