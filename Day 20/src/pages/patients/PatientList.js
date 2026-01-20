import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "../../components/ui/Modal";
import AddPatient from "./AddPatient";
import { getPatients, deletePatient } from "../../services/patientService";
import Skeleton from "../../components/ui/Skeleton";
import EmptyState from "../../components/comman/EmptyState";
import PatientCard from "../../components/patients/PatientCard";

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadPatients = () => {
    setLoading(true);
    setTimeout(() => {
      setPatients(getPatients());
      setLoading(false);
      setOpen(false);
    }, 500);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Patients</h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Add
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton height={120} />
          <Skeleton height={120} />
          <Skeleton height={120} />
        </div>
      ) : patients.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {patients.map((p) => (
            <PatientCard
              key={p.id}
              patient={p}
              onDelete={() => {
                deletePatient(p.id);
                loadPatients();
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <AddPatient onSuccess={loadPatients} />
      </Modal>
    </div>
  );
}
