import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Frontend Tasks</h2>

        <div className="nav-links">
          <NavLink
            to="/axiosInstance"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Axios Instance
          </NavLink>

          <NavLink
            to="/reactQuery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            React Query
          </NavLink>

        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
