import { motion } from "framer-motion";

export default function PatientCard({ patient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow p-5"
    >
      <h3 className="font-semibold text-lg">{patient.name}</h3>
      <p className="text-sm text-gray-500">Age: {patient.age}</p>
      <p className="text-sm text-gray-500">
        Disease: {patient.disease}
      </p>
    </motion.div>
  );
}
