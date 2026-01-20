import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { logout } from "../../hooks/useAuth";

export default function MobileNav() {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-gray-500"
        }
      >
        <LayoutDashboard />
      </NavLink>

      <NavLink
        to="/patients"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-gray-500"
        }
      >
        <Users />
      </NavLink>

      <button
        onClick={handleLogout}
        className=" text-red-500 hover:bg-red-50 p-3 rounded-lg"
      >
      <LogOut size={18} />
      </button>

    </nav>
  );
}
