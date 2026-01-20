import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function ServiceCard({ service = {}, isAdmin }) {
  const Icon = service.icon || Activity; // ✅ fallback icon

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
          <Icon size={24} />
        </div>
        <h3 className="font-semibold text-lg">
          {service.name || "Service"}
        </h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {service.description || "No description available"}
      </p>

      {isAdmin && (
        <button className="text-sm text-blue-600 hover:underline">
          Edit Service
        </button>
      )}
    </motion.div>
  );
}
