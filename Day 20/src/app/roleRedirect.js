import { Navigate } from "react-router-dom";
import { getUser } from "../hooks/useAuth";

export default function RoleRoute({ allowedRoles, children }) {
  const user = getUser();

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
