const KEY = "appointments";

export const getAppointments = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const addAppointment = (appointment) => {
  const appointments = getAppointments();
  appointments.push({
    id: Date.now(),
    status: "pending",
    ...appointment,
  });
  localStorage.setItem(KEY, JSON.stringify(appointments));
};

export const updateAppointmentStatus = (id, status) => {
  const appointments = getAppointments().map((a) =>
    a.id === id ? { ...a, status } : a
  );
  localStorage.setItem(KEY, JSON.stringify(appointments));
};
