import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { addAppointment } from "../../services/appointmentService";
import { getUser } from "../../hooks/useAuth";

export default function BookAppointment() {
  const user = getUser();

  const [form, setForm] = useState({
    service: "",
    doctor: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment({
      patient: user.email,
      ...form,
    });

    toast.success("Appointment requested");
    setForm({ service: "", doctor: "", date: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl bg-white p-6 rounded-xl shadow"
    >
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Service"
          className="w-full border p-3 rounded-lg"
          value={form.service}
          onChange={(e) =>
            setForm({ ...form, service: e.target.value })
          }
        />

        <input
          placeholder="Doctor Name"
          className="w-full border p-3 rounded-lg"
          value={form.doctor}
          onChange={(e) =>
            setForm({ ...form, doctor: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full border p-3 rounded-lg"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Request Appointment
        </button>
      </form>
    </motion.div>
  );
}
