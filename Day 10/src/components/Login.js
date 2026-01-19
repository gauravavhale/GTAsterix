import { useContext, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { UserContext } from "../context/user/UserContext";

const Login = () => {
  const { state: authState, login, logout } = useContext(AuthContext);
  const { state: userState, setProfile, clearProfile } = useContext(UserContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = () => {
    login(data);
    setProfile(data);
  };

  const handleLogout = () => {
    logout();
    clearProfile();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          width: "350px",
          borderRadius: "14px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
          textAlign: "center",
        }}
      >
        {authState.isAuthenticated ? (
          <div>
            <h2 style={{ marginBottom: "8px" }}>Welcome 👋</h2>
            <h3 style={{ marginBottom: "4px" }}>
              {userState.profile.name}
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "20px" }}>
              {userState.profile.email}
            </p>

            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#ef4444",
                color: "#ffffff",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ marginBottom: "4px" }}>Login</h2>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              Access your account
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                }}
              />

              <input
                type="text"
                name="role"
                placeholder="Role"
                value={data.role}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                }}
              />

              <button
                onClick={handleLogin}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#6366f1",
                  color: "#ffffff",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
