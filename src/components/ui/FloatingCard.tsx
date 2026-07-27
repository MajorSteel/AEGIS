import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  title: string;
  value: string;
  children?: React.ReactNode;
  className?: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({ title, value, children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0,111,207,0.05), 0 12px 24px rgba(0,0,0,0.4)' }}
      transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
      className={`bg-white/5 border border-white/10 rounded-2xl p-6 shadow-card transition-colors ${className}`}
    >
      <p className="font-sans text-[11px] uppercase tracking-wider text-aegis-muted">{title}</p>
      <h2 className="font-display text-4xl text-aegis-text mt-2 tracking-tight font-semibold">{value}</h2>
      {children && (
        <div className="mt-4 bg-black/20 rounded-xl p-2 shadow-recessed">
          {children}
        </div>
      )}
    </motion.div>
  );
};
