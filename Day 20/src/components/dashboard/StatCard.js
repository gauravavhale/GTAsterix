import { motion } from "framer-motion";

export default function StatCard({ label, value, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
    >
      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
        <Icon size={24} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </motion.div>
  );
}
