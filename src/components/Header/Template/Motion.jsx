import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MotionLi = ({ children, variant, ...props }) => {
  return (
    <>
      <motion.li
        variants={variant ? variant : variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.li>
    </>
  );
};
