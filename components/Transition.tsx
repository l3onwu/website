import { motion } from "framer-motion";

export default function Transition({ children, lag = 1 }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      // exit={{ opacity: 0, x: 0, y: 20 }}
      transition={{ duration: lag, type: "spring" }}
    >
      {children}
    </motion.article>
  );
}
