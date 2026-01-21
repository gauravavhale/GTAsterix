import { NavLink, useNavigate } from "react-router-dom";
import { menuConfig } from "../../config/menuConfig";
import { getUser, logout } from "../../hooks/useAuth";
import { LogOut } from "lucide-react";

export default function MobileNav() {
  const user = getUser();
  const menus = menuConfig[user?.role] || [];
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 md:hidden">
      {menus.map(({ path, icon: Icon }) => {
        const isRoot =
          path === "/admin" ||
          path === "/doctor" ||
          path === "/patient";

        return (
          <NavLink
            key={path}
            to={path}
            end={isRoot}
            className={({ isActive }) =>
              `p-3 rounded-lg transition
               ${isActive ? "text-blue-600" : "text-gray-500"}`
            }
          >
            <Icon size={22} />
          </NavLink>
        );
      })}

      <button
        onClick={handleLogout}
        className="text-red-500 p-3 rounded-lg"
      >
        <LogOut size={22} />
      </button>
    </nav>
  );
}
