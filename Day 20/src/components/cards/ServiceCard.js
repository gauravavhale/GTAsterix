import { motion } from "framer-motion";

export default function ServiceCard({ title, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow text-center"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </motion.div>
  );
}
