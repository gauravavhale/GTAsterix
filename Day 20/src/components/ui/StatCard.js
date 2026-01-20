import { motion } from "framer-motion";

export default function StatCard({ title, value, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
    >
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
      </div>

      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
        <Icon size={24} />
      </div>
    </motion.div>
  );
}
