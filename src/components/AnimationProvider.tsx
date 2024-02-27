'use client';

import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type AnimationProviderProps = {
    children: ReactNode;
    className?: string;
}
const AnimationProvider: FC<AnimationProviderProps> = ({ children, className }) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const variant = {
    hidden: { opacity: 0, y: -20 },
    visible,
  };

  return (
    <motion.div animate='visible' initial='hidden' variants={variant} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimationProvider;
