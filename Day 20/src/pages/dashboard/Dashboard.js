import { Users, CalendarCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "../../components/ui/StatCard";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >

      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back to MediCare Management System
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Patients"
          value="128"
          icon={Users}
          delay={0.1}
        />
        <StatCard
          title="Today's Appointments"
          value="24"
          icon={CalendarCheck}
          delay={0.2}
        />
        <StatCard
          title="Active Doctors"
          value="12"
          icon={Stethoscope}
          delay={0.3}
        />
      </div>
    </motion.div>
  );
}
