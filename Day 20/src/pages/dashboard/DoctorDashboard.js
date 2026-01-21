import { motion } from "framer-motion";

export default function DoctorDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h1 className="text-2xl font-bold">Doctor Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Assigned Patients</p>
          <h2 className="text-2xl font-bold">18</h2>
        </div>
        <div className="bg-green-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Today Appointments</p>
          <h2 className="text-2xl font-bold">6</h2>
        </div>
        <div className="bg-red-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Critical Cases</p>
          <h2 className="text-2xl font-bold">2</h2>
        </div>
      </div>

      {/* Sections */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Today’s Schedule</h3>
        <p className="text-sm text-gray-500">
          Review patient appointments and treatment plans.
        </p>
      </div>
    </motion.div>
  );
}
