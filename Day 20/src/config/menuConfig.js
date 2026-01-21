import {Home,Users,ClipboardList,Stethoscope,User, Calendar} from "lucide-react";

export const menuConfig = {
  admin: [
    { label: "Dashboard", path: "/admin", icon: Home },
    { label: "Patients", path: "/admin/patients", icon: Users },
    { label: "Services", path: "/admin/services", icon: ClipboardList },
  ],
  doctor: [
    { label: "Dashboard", path: "/doctor", icon: Stethoscope },
    { label: "Appointments", path: "/doctor/appointments", icon: Calendar },
    { label: "Patients", path: "/doctor/patients", icon: Users },
  ],
  patient: [
    { label: "Dashboard", path: "/patient", icon: Home },
    { label: "Appointments", path: "/patient/appointments", icon: Calendar },
    { label: "Services", path: "/patient/services", icon: ClipboardList },
    { label: "Profile", path: "/patient/profile", icon: User },
  ],
};

