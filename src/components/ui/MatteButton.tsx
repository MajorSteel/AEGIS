import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface MatteButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const MatteButton: React.FC<MatteButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-aegis-bg";
  
  const variants = {
    primary: "bg-aegis-primary text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-[#007ded]",
    secondary: "bg-white/5 text-aegis-text border border-white/10 hover:bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
    danger: "bg-[#FF3B30] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-[#ff4f45]",
  };

  return (
    <motion.button
      whileTap={{ y: 1, scale: 0.98, boxShadow: 'none' }}
      transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
