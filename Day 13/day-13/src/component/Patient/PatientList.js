import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const PatientList = () => {

    const fetchPatients = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json();
    };

    // Fake POST API
    const addPatient = async (newPatient) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPatient),
        });
        return res.json();
    };

    const queryClient = useQueryClient();
    const [name, setName] = useState("");

    const {data, isLoading, error } = useQuery ({
        queryKey:["patients"],
        queryFn: fetchPatients,
    })

      const mutation = useMutation({
    mutationFn: addPatient,

    // Optimistic UI logic
    onMutate: async (newPatient) => {
      await queryClient.cancelQueries(["patients"]);

      const previousPatients = queryClient.getQueryData(["patients"]);

      queryClient.setQueryData(["patients"], (old) => [
        ...old,
        { id: Date.now(), name: newPatient.name, email: "temp@email.com" },
      ]);

      return { previousPatients };
    },

    onError: (err, newPatient, context) => {
      queryClient.setQueryData(["patients"], context.previousPatients);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["patients"]);
    },
  });

  const handleAdd = () => {
    mutation.mutate({ name });
    setName("");
  };

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Patient List</h2>

      <input
        placeholder="Enter patient name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
        padding: "10px 14px",
        width: "250px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px",
        marginRight: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
        />

      <button
        onClick={handleAdd}
        style={{
            width:"100px",
            padding: "5px 10px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 4px 10px rgba(79,70,229,0.3)",
            transition: "0.3s",
        }}
      >
        Add Patient
      </button>

      {data.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
          <strong>{p.name}</strong>
        </div>
      ))}
    </div>
  )
}

export default PatientList