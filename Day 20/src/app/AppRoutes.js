import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import PatientList from "../pages/patients/PatientList";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";
import { AnimatePresence } from "framer-motion";
import RoleRoute from "./roleRedirect";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import DoctorDashboard from "../pages/dashboard/DoctorDashboard"
import PatientDashboard from "../pages/dashboard/PatientDashboard"
import Services from "../pages/services/Services";
import PatientProfile from "../pages/patients/PatientProfile";
import BookAppointment from "../pages/appointments/BookAppointment";
import DoctorAppointments from "../pages/appointments/DoctorAppointments";

export default function AppRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes >
        {/* location={location} key={location.pathname}  --------------------------------- */}
        <Route path="/login" element={<Login />} />

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute  ctedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <MainLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
          >
          <Route index element={<AdminDashboard />} />
          <Route path="patients" element={<PatientList />} />
          <Route path="services" element={<Services />} />
        </Route>

        {/* Doctor Route */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["doctor"]}>
                <MainLayout/>
              </RoleRoute>
            </ProtectedRoute>
          }
        >
           <Route index element={<DoctorDashboard />} />
           <Route path="patients" element={<PatientList />} />
           <Route path="appointments" element={<DoctorAppointments />} />
        </Route>

        {/* Patient Route */}
        <Route
          path="/patient"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["patient"]}>
                <MainLayout/>
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientDashboard/>} />
          <Route path="services" element={<Services/>} />
          <Route path="profile" element={<PatientProfile/>} />
          <Route path="appointments" element={<BookAppointment />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}
