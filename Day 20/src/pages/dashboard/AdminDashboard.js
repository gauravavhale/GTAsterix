import StatCard from "../../components/dashboard/StatCard";
import RecentAppointments from "../../components/dashboard/RecentAppointments";
import { Users, UserCheck, Calendar, Clock } from "lucide-react";
import { getPatients } from "../../services/patientService";
import { getAppointments } from "../../services/appointmentService";

export default function AdminDashboard() {
  const patients = getPatients();
  const appointments = getAppointments();

  const pending = appointments.filter(
    (a) => a.status === "pending"
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Patients"
          value={patients.length}
          icon={Users}
        />
        <StatCard
          label="Doctors"
          value={5} // mock for now
          icon={UserCheck}
        />
        <StatCard
          label="Appointments"
          value={appointments.length}
          icon={Calendar}
        />
        <StatCard
          label="Pending"
          value={pending.length}
          icon={Clock}
        />
      </div>

      {/* Recent */}
      <RecentAppointments />
    </div>
  );
}
