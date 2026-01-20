import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import PatientStatus from "./PatientStatus";

export default function PatientCard({ patient, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{patient.name}</h3>
        <PatientStatus status={patient.status} />
      </div>

      <p className="text-sm text-gray-500">
        Age: {patient.age}
      </p>
      <p className="text-sm text-gray-500">
        Disease: {patient.disease}
      </p>

      <div className="flex justify-end mt-4">
        <button
          onClick={onDelete}
          className="text-red-500 hover:bg-red-50 p-2 rounded transition-all active:scale-95"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}
