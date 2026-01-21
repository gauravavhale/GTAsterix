const STORAGE_KEY = "patients";

const DEFAULT_PATIENTS = [
  {
    id: "a60a2e09-11d2-41b8-a631-93c0fa1d0ec4",
    name: "Garry Hey",
    age: "29",
    disease: "Cold",
    createdAt: "2026-01-20T07:05:35.667Z",
  },
  {
    id: "3a30c538-9206-4318-95aa-e1d253351c5c",
    name: "John Doe",
    age: "30",
    disease: "Diabities",
    createdAt: "2026-01-20T07:06:05.139Z",
  },
  {
    id: "e1bb3e78-48bb-4e03-9310-f71ed866aa36",
    name: "Robin",
    age: "28",
    disease: "Fever",
    createdAt: "2026-01-20T07:16:15.755Z",
  },
  {
    id: "250fc834-de2c-485e-8c77-b3322a214eb5",
    name: "Chris Harrington",
    age: "43",
    disease: "Fracture",
    createdAt: "2026-01-20T07:41:01.761Z",
  },
  {
    id: "4b3c91da-34e6-48f5-8841-83d25682ab83",
    name: "Andrew Chloe",
    age: "42",
    disease: "xyz",
    createdAt: "2026-01-20T07:42:40.605Z",
  },
  {
    id: "151392dc-3a72-40a2-8a8c-a66762ce8269",
    name: "Gustavo Frinn",
    age: "48",
    disease: "",
    createdAt: "2026-01-20T12:21:44.254Z",
  },
];

export const getPatients = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(DEFAULT_PATIENTS)
    );
    return DEFAULT_PATIENTS;
  }

  return JSON.parse(data);
};

export const addPatient = (patient) => {
  const patients = getPatients();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...patients, patient])
  );
};

export const deletePatient = (id) => {
  const patients = getPatients();
  const updated = patients.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
