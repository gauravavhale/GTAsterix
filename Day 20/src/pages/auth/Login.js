import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { login } from "../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, role, password);

    if (success) {
      toast.success("Login successful");
      navigate(`/${role}`, { replace: true });
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      <div
        className="hidden md:flex relative items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3)",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">MediCare System</h1>
          <p className="text-lg opacity-90">
            Manage patients, doctors and records securely
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login to MediCare
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-4">
            Use any email & password
          </p>
        </motion.form>
      </div>
    </div>
  );
}
