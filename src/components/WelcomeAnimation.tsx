"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeAnimation({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="welcome"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="fixed inset-0 bg-[#0a192f] flex items-center justify-center z-50"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center text-[#7CE4F0]"
          >
            Welcome to <br /> My Portfolio
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}