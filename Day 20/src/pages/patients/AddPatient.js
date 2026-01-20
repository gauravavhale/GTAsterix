import { useState } from "react";
import toast from "react-hot-toast";
import { addPatient } from "../../services/patientService";

export default function AddPatient({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age) {
      toast.error("Name and Age are required");
      return;
    }

    addPatient({
      id: crypto.randomUUID(),
      ...form,
      createdAt: new Date().toISOString(),
    });

    toast.success("Patient added");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <h2 className="text-lg font-semibold">Add Patient</h2>

      <input
        placeholder="Name"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Age"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <input
        placeholder="Disease"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, disease: e.target.value })}
      />

      <button className="bg-blue-600 text-white w-full py-2 rounded transition-all duration-200 active:scale-95 hover:shadow-lg">
        Add Patient
      </button>

    </form>
  );
}
