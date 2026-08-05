import React from "react";
import { SubdirectoryArrowLeft, Favorite } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { motion } from "framer-motion";

interface LegacyReturnButtonProps {
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const LegacyReturnButton: React.FC<LegacyReturnButtonProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="pointer-events-auto group flex items-center gap-2.5 bg-(--accent) text-(--on-accent) px-5 py-3 rounded-full cursor-pointer hover:opacity-90 transition-opacity duration-150"
    >
      <SubdirectoryArrowLeft className="w-5 h-5 shrink-0" />
      {/* re• — exactly matches top-left navbar logo */}
      <span
        className="flex items-end text-2xl leading-none lowercase select-none"
        style={{
          fontVariationSettings:
            '"wdth" 125, "wght" 800, "GRAD" 100, "ROND" 100, "slnt" -10',
        }}
      >
        re
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-(--on-accent) mb-0.5 ml-0.5"
        />
      </span>
    </motion.button>
  );
};
