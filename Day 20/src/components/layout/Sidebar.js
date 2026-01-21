import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { menuConfig } from "../../config/menuConfig";
import { getUser } from "../../hooks/useAuth";
import { logout } from "../../hooks/useAuth";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const user = getUser();
  const menus = menuConfig[user?.role] || [];
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.aside
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-white shadow-lg h-screen p-6 hidden md:block"
    >
      <h2 className="text-xl font-bold text-blue-600 mb-8">
        MediCare
      </h2>

      <nav className="space-y-2">
        {menus.map(({ label, path, icon: Icon }) => {

          const isRoot = path === "/admin" || path === "/doctor" || path === "/patient";

          return (
          <NavLink
            key={path}
            to={path}
            end={isRoot}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition
               ${
                 isActive
                   ? "bg-blue-600 text-white"
                   : "text-gray-600 hover:bg-blue-50"
               }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
          )
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-10 flex items-center gap-2 text-red-500 hover:bg-red-50 p-3 rounded-lg w-full"
      >
      <LogOut size={18} />
        Logout
      </button>

    </motion.aside>
  );
}
