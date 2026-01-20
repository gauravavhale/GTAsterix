export const login = (email, role, password) => {
  if (!email || !role || !password) return false;

  localStorage.setItem("auth", "true");
  localStorage.setItem(
    "user",
    JSON.stringify({email,role})  
  );

  return true;
};

export const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem("auth"));
};
