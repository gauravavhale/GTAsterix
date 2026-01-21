import { getAppointments, updateAppointmentStatus } from "../../services/appointmentService";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(getAppointments());
  }, []);

  const updateStatus = (id, status) => {
    updateAppointmentStatus(id, status);
    setAppointments(getAppointments());
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Appointments</h2>

      {appointments.map((a) => (
        <motion.div
          key={a.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-xl shadow flex justify-between"
        >
          <div>
            <p className="font-semibold">{a.patient}</p>
            <p className="text-sm text-gray-500">
              {a.service} • {a.date}
            </p>
            <span className="text-xs capitalize">
              Status: {a.status}
            </span>
          </div>

          {a.status === "pending" && (
            <div className="flex gap-2">
              <button
                onClick={() => updateStatus(a.id, "approved")}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => updateStatus(a.id, "rejected")}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
