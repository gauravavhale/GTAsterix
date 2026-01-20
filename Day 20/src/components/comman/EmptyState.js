import { Users } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="text-center py-20 text-gray-500">
      <Users size={48} className="mx-auto mb-4" />
      <p className="text-lg font-medium">No patients yet</p>
      <p className="text-sm">Click “Add” to create your first patient</p>
    </div>
  );
}
