const STORAGE_KEY = "patients";

export const getPatients = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
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
