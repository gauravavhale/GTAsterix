export default function ProfileField({ label, value }) {
  return (
    <div className="flex justify-between border-b py-3">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
