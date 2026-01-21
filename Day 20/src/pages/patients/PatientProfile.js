import { motion } from "framer-motion";
import { User, Mail, Calendar } from "lucide-react";
import { getUser } from "../../hooks/useAuth";
import { getAppointments } from "../../services/appointmentService";

export default function PatientProfile() {
  const user = getUser();
  const appointments = getAppointments().filter(
    (a) => a.patient === user?.email
  );

  return (
    <div className="space-y-8">
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row items-center gap-6"
      >
       
        <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
          <User className="text-blue-600" size={36} />
        </div>

       
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-xl font-bold">Patient Profile</h2>
          <p className="text-gray-500 text-sm flex items-center justify-center sm:justify-start gap-2 mt-1">
            <Mail size={14} />
            {user?.email}
          </p>
        </div>

        
        <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 capitalize">
          {user?.role}
        </span>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow p-6"
      >
        <h3 className="text-lg font-semibold mb-4">
          Appointment History
        </h3>

        {appointments.length === 0 ? (
          <p className="text-sm text-gray-500">
            No appointments booked yet
          </p>
        ) : (
          <div className="grid gap-4">
            {appointments.map((a) => (
              <div
                key={a.id}
                className="border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
               
                <div>
                  <p className="font-medium">{a.service}</p>
                  <p className="text-sm text-gray-500">
                    Dr. {a.doctor}
                  </p>
                </div>

               
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={14} />
                  {a.date}
                </div>

                
                <span
                  className={`self-start sm:self-center px-3 py-1 rounded-full text-xs font-medium capitalize
                    ${
                      a.status === "approved"
                        ? "bg-green-100 text-green-600"
                        : a.status === "rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                >
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
