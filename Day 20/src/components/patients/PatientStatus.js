const statusStyles = {
  admitted: "bg-blue-100 text-blue-700",
  critical: "bg-red-100 text-red-700",
  discharged: "bg-green-100 text-green-700",
};

export default function PatientStatus({ status = "admitted" }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        statusStyles[status]
      }`}
    >
      {status.toUpperCase()}
    </span>
  );
}
