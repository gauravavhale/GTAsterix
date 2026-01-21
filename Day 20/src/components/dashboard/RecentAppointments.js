import { getAppointments } from "../../services/appointmentService";

export default function RecentAppointments() {
  const appointments = getAppointments().slice(-5).reverse();

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-4">Recent Appointments</h3>

      {appointments.length === 0 ? (
        <p className="text-sm text-gray-500">No appointments yet</p>
      ) : (
        <ul className="space-y-3">
          {appointments.map((a) => (
            <li
              key={a.id}
              className="flex justify-between text-sm"
            >
              <span>{a.patient}</span>
              <span className="capitalize text-gray-500">
                {a.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
