import { motion } from "framer-motion";

export default function PatientDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h1 className="text-2xl font-bold">Patient Dashboard</h1>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Health Status</p>
          <h2 className="text-xl font-bold text-green-700">Stable</h2>
        </div>
        <div className="bg-blue-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Next Appointment</p>
          <h2 className="text-xl font-bold">Tomorrow</h2>
        </div>
        <div className="bg-purple-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Assigned Doctor</p>
          <h2 className="text-xl font-bold">Dr. Sharma</h2>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Quick Actions</h3>
        <p className="text-sm text-gray-500">
          View services, check profile, or track treatment updates.
        </p>
      </div>
    </motion.div>
  );
}
