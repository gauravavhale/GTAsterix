import { motion } from "framer-motion";

export default function AdminDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Total Patients</p>
          <h2 className="text-2xl font-bold">128</h2>
        </div>
        <div className="bg-green-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Doctors</p>
          <h2 className="text-2xl font-bold">24</h2>
        </div>
        <div className="bg-yellow-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Active Services</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>
        <div className="bg-red-50 p-5 rounded-xl">
          <p className="text-sm text-gray-500">Critical Patients</p>
          <h2 className="text-2xl font-bold">5</h2>
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Recent Admissions</h3>
          <p className="text-sm text-gray-500">
            View newly admitted patients and assign doctors.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Hospital Activity</h3>
          <p className="text-sm text-gray-500">
            Daily overview of OPD, ICU, and lab usage.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
